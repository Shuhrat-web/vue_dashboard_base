import { ISizes, IUiTypes } from "@lib/shared/types/GlobalTypes"

export interface ITitleProps {
    size?: string,
    font?: string,
    display?: string,
    extraClass?: string,
    color?: string,
    centered?: boolean,
    badge?: string
}


export interface ITitleSetting {
    sizes: ISizes,
    font: ISizes,
    color: IUiTypes,
}