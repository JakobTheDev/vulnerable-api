// Node imports
import * as dotenv from 'dotenv';
import * as mssql from 'mssql';

// Import config
dotenv.config();

export const mssqlConfig: mssql.config = {
    database: process.env.DB_NAME || 'vulnerable',
    options: {
        encrypt: false,
    },
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
};
