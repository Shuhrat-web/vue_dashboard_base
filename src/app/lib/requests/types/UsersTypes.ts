import { IService } from "./ServicesTypes";
import { ITarif } from "./TarifsTypes";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    fathersName: string;
    tarif: ITarif;
    msisdn: number;
    services: IService[];
}