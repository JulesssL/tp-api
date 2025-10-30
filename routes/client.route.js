import express from 'express';
import ClientController from '../controllers/client.controller.js';

export default class ClientRoute {

    constructor() {
        this.router = new express.Router();
        this.clientController = new ClientController();

        this.router.get('/', (req, res) => {
            const infos = this.clientController.getAllClients();
            res.status(200).send(infos);
        });

        this.router.get('/:id', (req, res) => {
            const id = req.params.id;
            const clientInfos = this.clientController.getClient(id);
            res.status(200).send(clientInfos);
        });

        this.router.post('/', (req, res) => {
            const client = req.body;
            const addClient = this.clientController.addClient(client);
            res.status(200).send(addClient);
        });

        this.router.patch('/:id', (req, res) => {
            const newClient = req.body;
            const id = req.params.id;
            const patchClient = this.clientController.patchClient(id, newClient);
            res.status(200).send(patchClient);
        });

        this.router.post('/book/:idRoom/:idClient', (req, res) => {
            const idRoom = req.params.idRoom;
            const idClient = req.params.idClient;
            const reserve = this.clientController.book(idRoom, idClient);
            res.status(200).send(reserve);
        })

        this.router.post('/cancel/:idBooking', (req, res) => {
            const idBooking = req.params.idBooking;
            const cancel = this.clientController.cancel(idBooking);
            res.status(200).send(cancel)
        })
    }

}