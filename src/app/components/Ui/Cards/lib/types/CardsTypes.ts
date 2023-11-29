import { ISizes, IUiTypes } from "@/app/lib/shared/types/GlobalTypes";

export interface IColoredWithIconCardProps{
    type?: string;
    size?: string;
    icon?: string;
    label: string;
    round?: string;
    href?: string;
}

export interface IColoredCardWithIconsSettings{
    type: IUiTypes;
    size:ISizes;
    round: ISizes;
} 