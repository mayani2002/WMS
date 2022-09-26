import Truck from "../models/truck.js";
import PickUpRequest from "../models/pickup_request.js";
import Journey from "../models/journey.js";

export const getPendingPickUps = async (request, response) => {
    try {
        const pendingRequests = await PickUpRequest.find({}, {requestStatus: "Pending"});
        response.status(200).json(pendingRequests);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getAvailableTrucks = async (request, response) => {
    try {
        const availableTrucks = await Truck.find({}, {"Truck Status": "Ideal"});
        response.status(200).json(availableTrucks);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getAvailableSlot = async (request, response) => {
    response.status(200).json("Hello from getAvailableSlot!");
}

export const getRoute = async (request, response) => {
    try {
        const route = await Journey.find({});
        response.status(200).json(route);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const pickUpComplete = async (request, response) => {
    try {
        const pickUpRequestComplete = await PickUpRequest.updateOne(
            { requestId: request.body.pickUpRequestId }, 
            { requestStatus: "Completed" },
            { upsert: false }
        );
        response.status(200).json({ msg: "Update Successful" });
    } catch(error) {
        response.status(500).json(error);
    }
}

