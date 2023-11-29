import { ILinkData } from "@lib/shared/types/GlobalTypes";

export interface IAsideLinksProps {
    routes?: ILinkData[];
}

export interface ISidebarProps{
    showAside: boolean;
}
export interface IHeaderProps{
    toggleShowHeader: () => void,
    show:boolean;
}