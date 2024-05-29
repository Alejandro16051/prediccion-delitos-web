// Import the Router class from the 'express' module.
import { Router } from 'express';
// Create a new Router object.
const router = Router();
// Define a GET route for the root path ('/').
// When a GET request is made to the root path, the callback function will be executed.
router.get('/', (req, res) => {
    // Render the 'index' view, passing the 'title' variable to the view.
    res.render('index', { title: 'SPD - Inicio' });
});
// Export the router object as the default export.
export default router;