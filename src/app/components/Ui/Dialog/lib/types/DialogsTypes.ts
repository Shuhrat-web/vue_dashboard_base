import { ISizes } from "@/app/lib/shared/types/GlobalTypes";

export interface IBaseDialogProps{
    show?: boolean;
    toggleShow?: (val:boolean) => void;
    size?: string;
}

export interface IDialogSettings{
    size: ISizes
}