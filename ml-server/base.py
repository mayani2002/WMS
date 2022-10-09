from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sys
import json
import gmaps

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def calcRoute(pickUpPoints):
    API_KEY = 'AIzaSyALxhDu88ZwC0KSpdmVRhZZeFPd8Vamwf0'
    gmaps.configure(api_key=API_KEY)

    depot = {
        'location': (28.511666012792553, 77.28490072861788)
    }

    # print(depot['location'][0])

    num_vehicles = 1

    shipments = pickUpPoints
    print(len(shipments))
    # shipments = [
    #     { 
    #         'name': 'Gaur City 5th Avenue, Noida Extension, Noida, Noida Extension, Noida, Delhi NCR',
    #         'location': (28.614181, 77.427713)
    #     },
    #     {
    #         'name': '205. Hardik tower sector 53 Noida, Sector 53, Noida, Delhi NCR',
    #         'location': (28.595062163128482, 77.36452068784652)
    #     },
    #     {
    #         'name': 'Sector 68, Gurgaon, Delhi NCR',
    #         'location': (28.482277, 76.99199526)
    #     },
    #     {
    #         'name': 'G 033., Sector 108, Gurgaon, Delhi NCR',
    #         'location': (28.65280724, 77.4509201)
    #     },
    #     {
    #         'name': 'Amritpuri B East of Kailash, Amritpuri, New Delhi - South, Delhi NCR',
    #         'location': (28.68956947, 77.33861542)
    #     },
    #     {
    #         'name': 'Ghaziabad, Vivekanand Nagar, Ghaziabad, Delhi NCR',
    #         'location': (28.647938, 77.340697)
    #     },
    #     {
    #         'name': 'Lotus boulevard, Sector 100, Noida, Delhi NCR',
    #         'location': (28.43520877, 77.09022523)
    #     },
    #     {
    #         'name': 'Krishna Park Colony, New Delhi - South, Delhi NCR',
    #         'location': (28.509755539590625, 77.23370980242824)
    #     },
    #     {
    #         'name': 'Vaishali, Ghaziabad, Delhi NCR',
    #         'location': (28.645769, 77.38511)
    #     },
    #     {
    #         'name': 'Sector 45, Noida, Sector 45, Noida, Delhi NCR',
    #         'location': (28.54692971, 77.35438729)
    #     }
    # ]

    shipment_locations = [shipment['location'] for shipment in shipments]
    shipment_labels = [shipment['name'] for shipment in shipments]

    import googlemaps
    import pandas as pd


    def build_distance_matrix(depot, shipments, measure='distance'):

        gmaps_services = googlemaps.Client(key=API_KEY)
        origins = destinations = [item['location'] for item in [depot] + shipments]
        dm_response = gmaps_services.distance_matrix(origins=origins, destinations=destinations)
        dm_rows = [row['elements'] for row in dm_response['rows']]
        distance_matrix = [[item[measure]['value'] for item in dm_row] for dm_row in dm_rows]
        return distance_matrix

    try:
        print("I am distance matrix wala try catch")
        objective = 'distance'  # distance or duration
        # Distance Matrix API takes a max 100 elements = (origins x destinations), limit to 10 x 10
        distance_matrix = build_distance_matrix(depot, shipments, objective)

    except:
        print('Something went wrong building distance matrix.')

    # print(df)

    # Vehicles Routing Problem (VRP)
    from ortools.constraint_solver import routing_enums_pb2
    from ortools.constraint_solver import pywrapcp


    def create_data_model(distance_matrix, num_vehicles):
        """Stores the data for the problem."""
        data = {}
        data['distance_matrix'] = distance_matrix
        data['num_vehicles'] = num_vehicles
        data['depot'] = 0
        return data

    def extract_routes(num_vehicles, manager, routing, solution):
        routes = {}
        for vehicle_id in range(num_vehicles):
            routes[vehicle_id] = []
            index = routing.Start(vehicle_id)
            while not routing.IsEnd(index):
                routes[vehicle_id].append(manager.IndexToNode(index))
                previous_index = index
                index = solution.Value(routing.NextVar(index))
            routes[vehicle_id].append(manager.IndexToNode(index))
        # print(routes)
        return routes

    def print_solution(num_vehicles, manager, routing, solution):
        """Prints solution on console."""
        max_route_distance = 0
        for vehicle_id in range(num_vehicles):
            index = routing.Start(vehicle_id)
            plan_output = 'Route for vehicle {}:\n'.format(vehicle_id)
            route_distance = 0
            while not routing.IsEnd(index):
                plan_output += ' {} -> '.format(manager.IndexToNode(index))
                previous_index = index
                index = solution.Value(routing.NextVar(index))
                route_distance += routing.GetArcCostForVehicle(
                    previous_index, index, vehicle_id)
            plan_output += '{}\n'.format(manager.IndexToNode(index))
            plan_output += 'Cost of the route: {}\n'.format(route_distance)
            # print(plan_output)
            max_route_distance = max(route_distance, max_route_distance)
        # print('Maximum route cost: {}'.format(max_route_distance))

    def generate_solution(data, manager, routing):  
        """Solve the CVRP problem."""

        # Create and register a transit callback.
        def distance_callback(from_index, to_index):
            """Returns the distance between the two nodes."""
            # Convert from routing variable Index to distance matrix NodeIndex.
            from_node = manager.IndexToNode(from_index)
            to_node = manager.IndexToNode(to_index)
            return data['distance_matrix'][from_node][to_node]

        transit_callback_index = routing.RegisterTransitCallback(distance_callback)

        # Define cost of each arc.
        routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

        # # Add Distance constraint.
        # dimension_name = 'Distance'
        # flattened_distance_matrix = [i for j in data['distance_matrix'] for i in j]
        # max_travel_distance = 2 * max(flattened_distance_matrix)

        # routing.AddDimension(
        #     transit_callback_index,
        #     0,  # no slack
        #     max_travel_distance,  # vehicle maximum travel distance
        #     True,  # start cumul to zero
        #     dimension_name)
        # distance_dimension = routing.GetDimensionOrDie(dimension_name)
        # distance_dimension.SetGlobalSpanCostCoefficient(100)

        # Setting first solution heuristic.
        search_parameters = pywrapcp.DefaultRoutingSearchParameters()
        search_parameters.first_solution_strategy = (routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)

        # Solve the problem.
        solution = routing.SolveWithParameters(search_parameters)
        return solution

    def solve_vrp_for(distance_matrix, num_vehicles):
        # Instantiate the data problem.
        data = create_data_model(distance_matrix, num_vehicles)

        # Create the routing index manager.
        manager = pywrapcp.RoutingIndexManager(len(data['distance_matrix']), data['num_vehicles'], data['depot'])

        # Create Routing Model.
        routing = pywrapcp.RoutingModel(manager)

        # Solve the problem
        solution = generate_solution(data, manager, routing)

        if solution:
            # Print solution on console.
            print_solution(num_vehicles, manager, routing, solution)
            routes = extract_routes(num_vehicles, manager, routing, solution)
            return routes
        else:
            # print(solution)
            print('No solution found.')

    try:
        print("I am routes wala try catch")
        routes = solve_vrp_for(distance_matrix, num_vehicles)
        # print(routes)
    except:
        print('Something went wrong solving VRP.')



    for vehicle_id in routes:
        waypoints = []

        # skip depot (occupies first and last index)
        for shipment_index in routes[vehicle_id][1:-1]: 
            waypoints.append(shipments[shipment_index-1]['location'])
        
        waypoints.insert(0, [depot['location'][0], depot['location'][1]])
        waypoints.append([depot['location'][0], depot['location'][1]])
    
    # print(waypoints)
    return waypoints


def listToString(s):
 
    # initialize an empty string
    str1 = ""
 
    # traverse in the string
    for ele in s:
        str1 += ele
 
    # return string
    return str1

@app.route('/calculateRoute', methods = ["POST"])
@cross_origin()
def calculateRoute():
    print("Request for calculating routes recieved!")
    outPutString = str(calcRoute(request.get_json()))
    return outPutString

if __name__ == "__main__":
    app.run(debug = True)