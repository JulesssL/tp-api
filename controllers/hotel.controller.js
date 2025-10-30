import HotelService from "../services/hotel.service.js";

export default class HotelController {
    
    constructor() {
        this.hotelService = new HotelService();
    }

    getInfos() {
        const hotelInfos = this.hotelService.getInfos();
        return hotelInfos;
    }

    getRooms() {
        const rooms = this.hotelService.getRooms();
        return rooms;
    }

    getRoomInfos(roomId) {
        const room = this.hotelService.getRoomInfos(roomId);
        return room;
    }

    bookRoom(roomId) {
        const message = this.hotelService.bookRoom(roomId);
        return message;
    }

    cancelRoom(roomId) {
        const message = this.hotelService.cancelReservation(roomId);
        return message;
    }

}

