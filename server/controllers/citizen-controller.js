import Citizen from "../models/citizen.js";
import PickUpRequest from "../models/pickup_request.js";

export const addUser = async (request, response) => {
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let password = request.body.password;

    try {
        const exist = await Citizen.findOne({ email: email });
        const newCitizen = await Citizen.update(
            { email: email },

            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }, { upsert: true });
        if (newCitizen) {
            if (exist) {
                response.status(200).json('User already exists, the details are updated!');
            } else {
                response.status(200).json('User added sucessfully!!');
            }
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await Citizen.find({});
        response.status(200).json(users);
        console.log(users);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const addPickUp = async (request, response) => {
    console.log("inside addPickUp")
    try {
        let added = await PickUpRequest.insert(
            {
                // userId: request.body.userId,
                date: request.body.date,
                timeSlot: request.body.timeSlot,
                // pickUpAddress: request.body.pickUpAddress,
                garbageType: request.body.garbageType,
                approxGarbageWeight: request.body.approxGarbageWeight
            }
        );

        if (added) {
            response.status(200).json("Pick-up request added successfully!");
            return;
        }

        // const newPickUpRequest = new user(request.body);
        // await newUser.save();
    } catch (error) {
        response.status(500).json(error);
    }
}

export const trackPickUp = async (request, response) => {
    response.status(200).json("Hello from trackPickUp!");
}

export const getPresentPickUps = async (request, response) => {
    try {
        const users = await PickUpRequest.find({}, {});
        response.status(200).json(users);
        console.log(users);
    } catch (error) {
        response.status(500).json(error);
    }
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

