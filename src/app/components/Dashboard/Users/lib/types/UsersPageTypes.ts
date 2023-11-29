import { IUser } from "@/app/lib/requests/types/UsersTypes";

export interface IUserFormProps {
    conFirmForm: (item:IUser) => void;
    activeItem?: IUser;
    toggleCancle: (val:boolean) => void; 
}