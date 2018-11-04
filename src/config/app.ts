// Node imports
import * as dotenv from 'dotenv';

// Import config
dotenv.config();

export const appConfig: any = {
    name: 'Vulnerable API',
    portHttp: process.env.PORT_HTTPS || 80,
    portHttps: process.env.PORT_HTTP || 443,
    certificate: process.env.PATH_CERTIFICATE || 'C:\\Users\\Administrator\\Desktop\\vulnerable.crt',
    key: process.env.PATH_KEY || 'C:\\Users\\Administrator\\Desktop\\vulnerable.key'
};
