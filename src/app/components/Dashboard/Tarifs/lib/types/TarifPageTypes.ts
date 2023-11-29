import { ITarif } from "@/app/lib/requests/types/TarifsTypes";

export interface ITarifFormProps{
    conFirmForm: (item:ITarif) => void;
    activeItem?: ITarif;
    toggleCancle: (val:boolean) => void; 
}