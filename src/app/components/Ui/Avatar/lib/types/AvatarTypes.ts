import { ISizes, IUiTypes } from "@/app/lib/shared/types/GlobalTypes";

export interface INamedAvatarProps {
    fullName: string;
    color?: string;
    size?: string;
}

export interface INamedAvatarSettings {
    color: IUiTypes;
    size: ISizes;
}