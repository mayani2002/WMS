import Truck from "../models/truck.js";

export const getPendingPickUps = async (request, response) => {
    response.status(200).json("Hello from getPendingPickUps!");
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

