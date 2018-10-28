// Node imports
import * as dotenv from 'dotenv';
import express from 'express';
import mssql from 'mssql';

// Bootstrao the express application
const app = express();

// Import config
dotenv.config();

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Configure MSSQL DB Connection
const config = {
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
};

// Start the server
app.listen(3000, () => console.log('Example app listening on port 3000!'));
