import Citizen from "../models/citizen.js"

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
    response.status(200).json("Hello from addPickUp!");
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

export const deleteRequest = async (request, response) => {
    response.status(200).json("Hello from deleteRequest!");
}

