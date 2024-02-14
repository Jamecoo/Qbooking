import { EquipmentsEnum } from "../Enums/equipments";
import { RoomModel } from "./roomBoking";

export interface BookingModel {
    _id: string;
    customerID: string;
    roomID: string;
    room: RoomModel
    roomName: string;
    meettingDate: string;
    meettingTime: string;
    startTime: string;
    endTime: string;
    equipments: EquipmentsEnum;
    status_booking_done: boolean;
}