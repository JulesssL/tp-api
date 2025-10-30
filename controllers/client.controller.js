import ClientService from "../services/client.service.js";

export default class ClientController {
    
    constructor() {
        this.clientService = new ClientService();
    }

    getAllClients() {
        return this.clientService.getAllClients();
    }

    getClient(clientId) {
        return this.clientService.getClient(clientId);
    }

    addClient(client) {
        return this.clientService.addClient(client);
    }

    patchClient(id, newClient) {
        return this.clientService.patchClient(id, newClient);
    }

    book(idRoom, idClient) {
        return this.clientService.book(idRoom, idClient);
    }

    cancel(idBooking) {
        return this.clientService.cancel(idBooking);
    }

}

