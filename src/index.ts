// Node imports
import * as express from 'express';
import * as helmet from 'helmet';
import * as fs from 'fs';
import * as https from 'https';

// App imports
import routes from './routes';
import { appConfig } from './config/app'; 

// Bootstrap the express application
const app = express();

// Middlewares
app.use(helmet());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes
app.use('/', routes);

// Configure HTTPS
const privateKey  = fs.readFileSync(appConfig.key, 'utf8');
const certificate = fs.readFileSync(appConfig.certificate, 'utf8');
const credentials = {key: privateKey, cert: certificate};

// Create and start the server 
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(appConfig.port);