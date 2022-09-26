import Citizen from "../models/citizen.js";
import PickUpRequest from "../models/pickup_request.js";

export const addUser = async (request, response) => {
    response.status(200).json("Hello from addUser!");
}

export const getUsers = async (request, response) => {
    try {
        const users = await Citizen.find({});
        response.status(200).json(users);
        console.log(users);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const addPickUp = async (request, response) => {
    try {
        let exist = await PickUpRequest.findOne(
            { 
                date: request.body.date,
                timeSlot: request.body.timeSlot,
                pickUpAddress: request.body.pickUpAddress,
                garbageType: request.body.garbageType,
                approxGarbageWeight: request.body.approxGarbageWeight
            }
        );

        if (exist) {
            response.status(200).json("Request Already Exists!");
            return;
        }

        const newPickUpRequest = new user(request.body);
        await newUser.save();
        response.status(200).json("Request Added Successfully!");
    } catch (error) {
        response.status(500).json(error);
    }
}

export const trackPickUp = async (request, response) => {
    response.status(200).json("Hello from trackPickUp!");
}

export const getPresentPickUps = async (request, response) => {
    response.status(200).json("Hello from getPresentPickUps!");
}

export const getPastPickUps = async (request, response) => {
    response.status(200).json("Hello from getPastPickUps!");
}

export const getfuturePickUps = async (request, response) => {
    response.status(200).json("Hello from getfuturePickUps!");
}

export const getNotifications = async (request, response) => {
    response.status(200).json("Hello from getNotifications!");
}

export const addContact = async (request, response) => {
    response.status(200).json("Hello from addContact!");
}

export const deleteRequestU = async (request, response) => {
    response.status(200).json("Hello from deleteRequest!");
}

