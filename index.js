import express from 'express';
import HotelRoute from './routes/hotel.route.js';
import ClientRoute from './routes/client.route.js';
import AuthRoute from './routes/auth.route.js'; 
import dotenv from 'dotenv';
import { requireApiKey } from './middlewares/apikey.middleware.js';

// INIT
const app = express();
const port = 3000;
dotenv.config();

// ROUTES
const HotelRouter = new HotelRoute().router;
const ClientRouter = new ClientRoute().router;
const AuthRouter = new AuthRoute().router;

// USE
app.use(express.json());
app.use(requireApiKey);
app.use("/hotel", HotelRouter);
app.use("/client", ClientRouter);
app.use("/auth", AuthRouter);

// LISTEN
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
