import { ISizes, IUiTypes } from "@lib/shared/types/GlobalTypes";

export interface IBaseButtonProps{
    type?: string;
    round?: string;
    textColor?: string;
    btn?: boolean;
    animate?: boolean;
    size?: string;
    flat?: boolean;
    outlined?: boolean;
    block?: boolean;
    extraClass?: string;
    loading?: boolean;
}

export interface IButtonSettings {
    size: ISizes;
    round: ISizes;
    types: IUiTypes;
    flat: IUiTypes;
    outlined: IUiTypes;
    textColor: IUiTypes;
    animate?: string;
}
