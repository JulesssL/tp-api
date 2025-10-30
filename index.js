import express from 'express';
import HotelRoute from './routes/hotel.route.js';
import ClientRoute from './routes/client.route.js';

// INIT
const app = express();
const port = 3000;

// ROUTES
const HotelRouter = new HotelRoute().router;
const ClientRouter = new ClientRoute().router;

// USE
app.use(express.json());
app.use("/hotel", HotelRouter);
app.use("/client", ClientRouter);

// LISTEN
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
