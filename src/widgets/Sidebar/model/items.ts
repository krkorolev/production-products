import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from "shared/assets/icon/clarity_list-outline-badged.svg";
import MainIcon from "shared/assets/icon/Vector.svg";
import ProfileIcon from "shared/assets/icon/profile.svg"
export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}



export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    }
]