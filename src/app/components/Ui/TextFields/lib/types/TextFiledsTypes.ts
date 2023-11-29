import { ISizes, IUiTypes } from "@lib/shared/types/GlobalTypes";

export interface IBaseTextFieldProps {
    label?: string;
    modelValue: string | number;
    name?: string;
    textfieldType?: string;
    required?: boolean;
    type?: string; 
    round?: string;
    size?: string;
    placeHolder?: string;
}

export interface ITextFieldSettings {
    type: IUiTypes;
    round: ISizes;
    textSize: ISizes;
    size: ISizes;
}