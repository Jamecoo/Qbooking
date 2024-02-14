import { GenderEnum } from "../Enums/gender";

export interface ProfileModel {
    _id: string;
    image: string;
    Name: string;
    gamil: string;
    gender: GenderEnum;
    phone: string;
    country: string;
}