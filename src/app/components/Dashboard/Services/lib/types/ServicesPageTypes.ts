import { IService } from "@/app/lib/requests/types/ServicesTypes";

export interface IServicesFormProps{
    conFirmForm: (item:IService) => void;
    activeItem?: IService;
    toggleCancle: (val:boolean) => void; 
}