import Express from "express";
import { addUser, getUsers, addPickUp, getPickUp, getPickUpList, trackPickUp, deleteRequestU, getNotifications, addContact } from "../controllers/citizen-controller.js";
import { getAllPickUpRequests, getAvailableTrucks, getAvailableSlot, addRoute, getRoute, pickUpComplete } from "../controllers/admin-controller.js";

const route = Express.Router();


// defining add API and call addUser() function on post request sent
//Citizen
route.post('/add', addUser); //signup
route.get('/users', getUsers);  //login

route.post('/addPickUp', addPickUp); //add pick up  request to be scheduled
route.get('/getPickUp', getPickUp); //add pick up  request to be scheduled
route.post('/trackPickUp', trackPickUp); //track the pick up request

route.get('/PickUpList', getPickUpList);  //access persent pick up  request

route.delete('/deleteRequest', deleteRequestU); //delete request

// route.get('/notify', notify);  //send notification
route.get('/getNotifications', getNotifications);  //access notifications

route.post('/addContact', addContact); //add request to be scheduled
//route.get('/request', getRequest);  //access request


//--------------------------------------------------------------------
//Admin
route.get('/getAllPickUpRequests', getAllPickUpRequests); //get pending pick-up request to be scheduled

route.get('/availableTrucks', getAvailableTrucks);  //get information of available truck

route.post('/addRoute', getAvailableSlot);  //get information of available time slot
route.get('/getRoute', getRoute);  //get information of available time slot
route.get('/addRoute', addRoute);  //get information of available time slot


//--------------------------------------------------------------------
//Truck
route.put('/pickUpComplete', pickUpComplete); //




export default route;