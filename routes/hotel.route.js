import express from 'express';
import { requireRole, requireToken } from "../middlewares/auth.middleware.js";
import { requireApiKey } from "../middlewares/apikey.middleware.js";
import HotelController from '../controllers/hotel.controller.js';

export default class HotelRoute {
    
    constructor() {
        this.router = new express.Router();
        this.hotelController = new HotelController();

        this.router.get("/",  (req, res) => {
            const infos = this.hotelController.getInfos();
            res.status(200).send(infos);
        });

        this.router.get("/rooms",  requireToken, requireRole('admin'), (req, res) => {
            const rooms = this.hotelController.getRooms();
            res.status(200).send(rooms);
        });

        this.router.get("/rooms/:id",  requireToken, requireRole('admin'), (req, res) => {
            const id = req.params.id;
            const roomInfos = this.hotelController.getRoomInfos(id);
            res.status(200).send(roomInfos);
        });

        this.router.post('/rooms/:id/book',  requireToken, requireRole('user'), (req, res) => {
            const id = req.params.id;
            const message = this.hotelController.bookRoom(id);
            res.status(200).send(message);
        });

        this.router.delete('/rooms/:id/cancel',  requireToken, requireRole('user'),  (req, res) => {
            const id = req.params.id;
            const message = this.hotelController.cancelRoom(id);
            res.status(200).send(message);
        })

    }

}