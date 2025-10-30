import fs from 'fs';
import path from 'path';


export default class HotelService {

    constructor() {
        this.hotelDataPath = path.resolve('./data/hotel.json');
    }

    getInfos() {
        const data = JSON.parse(fs.readFileSync(this.hotelDataPath));
        const { rooms, ...infos } = data;
        return infos;
    }

    getRooms() {
        const data = JSON.parse(fs.readFileSync(this.hotelDataPath));
        return data.rooms;
    }

    getRoomInfos(roomId) {
        const data = JSON.parse(fs.readFileSync(this.hotelDataPath));
        const rooms = data.rooms;
        return rooms.find((r) => r['id'] == roomId);
    }

    bookRoom(roomId) {
        return { message: `Chambre ${roomId} réservée avec succès.` };
    }

    cancelReservation(roomId) {
        return { message: `Réservation pour la chambre ${roomId} annulée.` };
    }

}