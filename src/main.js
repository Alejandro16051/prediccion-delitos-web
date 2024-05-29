// Import the 'express' module.
import express from 'express';

// Import the 'dirname' and 'join' functions from the 'path' module.
import { dirname, join } from 'path';

// Import the 'fileURLToPath' function from the 'url' module.
import { fileURLToPath } from 'url';

// Import the 'indexRoutes' module from the './routes/router.js' file.
import indexRoutes from './routes/router.js';

// Create an instance of the 'express' application.
const app = express();

// Get the directory name of the current file.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Set the 'views' directory to the 'views' folder in the current directory.
app.set('views', join(__dirname, 'views'));

// Set the 'view engine' to 'ejs'.
app.set('view engine', 'ejs');

// Use the 'indexRoutes' module as a middleware.
app.use(indexRoutes);

// Serve static files from the 'public' folder.
app.use(express.static(join(__dirname, 'public')));

// Serve static files from the 'images' folder.
app.use(express.static(join(__dirname, 'images')));

// Start the server on port 3000.
app.listen(3000);

// Log a message to the console indicating that the server is listening on port 3000.
console.log('Server is listening on port', 3000);
