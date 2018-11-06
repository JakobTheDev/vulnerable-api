// Node imports
import { Request, Response } from 'express';
import * as mssql from 'mssql';

// App imports
import { mssqlConfig } from '../../config/mssql';

/**
 * GET /search
 * Search the names of registered users.
 */
export const getSearch = (req: Request, res: Response) => {
    // Get query from the request
    const firstName: string = req.query.firstName;

    // Set up a connection
    const connection = new mssql.ConnectionPool(mssqlConfig);

    // Connect and submit the query
    connection.connect().then((pool: mssql.ConnectionPool) => {
        const sqlRequest = new mssql.Request(pool);
        sqlRequest.query(`SELECT * from vuln.users WHERE firstName LIKE '${firstName}' AND username != 'admin'`)
            .then((result: mssql.IResult<any>) => {
                res.send(result.recordsets);
                connection.close();
            }).catch((err: Error) => {
                console.log(err);
                res.send(JSON.stringify(err));
                connection.close();
            });
    }).catch((err: Error) => {
        console.log(err);
    });

};
