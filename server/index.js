import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import route from './Router/routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

const PORT = 8000;
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDbName = process.env.MONGO_DB_NAME;

Connection(mongoUsername, mongoPassword, mongoDbName);

app.listen(PORT, () => console.log('Your server is up and running on PORT: ' + PORT));

// console.log("Hello Nodemon");
