// Node imports
import * as dotenv from 'dotenv';
import * as express from 'express';

// App imports
import routes from './routes';

// Import config
dotenv.config();

// Bootstrap the express application
const app = express();

// Routes
app.use('/', routes);

// Start the server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
