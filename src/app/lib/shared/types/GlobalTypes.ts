export interface ILinkData{
    id: number,
    path: string,
    title: string,
    icon?: string
}

export interface IChild{
    children: any;
}

export interface IDefaultProps{
    className?: string;
    onClick?: (prop:any) => void;
    onChange?: Function | any;
    onInput?: Function | any;
}

export interface IBaseUiProps{
    size?: string;
    type?: string;
    rounded?: string;
}

export interface ISizes {
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    '4xl'?: string;
    lg: string;
    md: string;
    sm: string;
    xs?:string;
    none?: string;
    full?: string;
}

export interface IUiTypes {
    success?: string;
    primary: string;
    warning: string;
    danger: string;
    secondary?:string;
    white?:string;
    none?: string;
    text?: string;
}

export interface IScreenSizes{
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
}


export interface ISvg extends IDefaultProps{
    height?: number;
    width?: number;
    fill?: string;
    stroke?: string;
}

export interface IPositions{
    top: string;
    bottom: string;
    left: string;
    right: string;
    center: string;
}


export interface IActions {
    delete: boolean;
    edit: boolean;
    create: boolean
}