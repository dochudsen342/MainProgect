import React from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SideBarItemType{
    path:string,
    text:string,
    Icon:React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const  SideBarItemsList:SideBarItemType[] =[
    {
        path:RoutePath.about,
        text:'О нас',
        Icon:MainIcon
    },
     {
        path:RoutePath.main,
        text:'Главная',
        Icon: AboutIcon
    },
    {
        path:RoutePath.profile,
        text:'Профиль',
        Icon:ProfileIcon
    },
]

