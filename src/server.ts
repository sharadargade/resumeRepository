// server.ts or index.ts

import 'dotenv/config'; // Load environment variables
import '@/index'; // Optionally, import some initial configuration
import App from '@/app'; // Import the main application class
import AboutRoute from '@routes/aboutRoutes';

const app = new App([new AboutRoute()]);
app.listen();
