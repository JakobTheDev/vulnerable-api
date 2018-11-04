// Node imports
import * as dotenv from 'dotenv';

// Import config
dotenv.config();

export const appConfig: any = {
    name: 'Vulnerable API',
    portHttp: process.env.APP_PORT || 3000,
    portHttps: process.env.APP_PORT || 3001,
    certificate: process.env.PATH_CERTIFICATE || '/home/ubuntu/vulnerable.crt',
    key: process.env.PATH_KEY || '/home/ubuntu/vulnerable.key'
};
