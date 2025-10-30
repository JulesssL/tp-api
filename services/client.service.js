import fs from 'fs';
import path from 'path';

export default class ClientService {

    constructor() {
        this.hotelDataPath = path.resolve('./data/hotel.json');
        this.clientDataPath = path.resolve('./data/clients.json');
    }

    getAllClients() {
        const clients = JSON.parse(fs.readFileSync(this.clientDataPath));
        return clients;
    }

    getClient(clientId) {
        const data = JSON.parse(fs.readFileSync(this.clientDataPath));
        const clients = data.clients;
        return clients.find((r) => r['id'] == clientId);
    }

    addClient(client) {
        return { message: `Client ${client.name} ajouté avec succès`};
    }

    patchClient(id, newClient) {
        const data = JSON.parse(fs.readFileSync(this.clientDataPath));
        const clients = data.clients;
        const client = clients.find((r) => r['id'] == id);
        return { message: `Client ${client.name} modifié avec succès`};
    }

    book(idRoom, idClient) {
        const dataClients = JSON.parse(fs.readFileSync(this.clientDataPath));
        const clients = dataClients.clients;
        const client = clients.find((r) => r['id'] == idClient);
        return { message: `Chambre ${idRoom} reservée pour le client ${client.name}`};
    }

    cancel(idBooking) {
        return { message: `Réservation ${idBooking} annulée`};
    }

}