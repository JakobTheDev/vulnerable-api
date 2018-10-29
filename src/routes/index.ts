// Node imports
import { Router } from 'express';

// App imports
import * as searchController from './controllers/search';

// Get the router
const router: Router = Router();

// Register app routes
router.use('/search', searchController.getSearch);

export default router;
