// Node imports
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as helmet from 'helmet';

// App imports
import routes from './routes';

// Import config
dotenv.config();

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

// Start the server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
