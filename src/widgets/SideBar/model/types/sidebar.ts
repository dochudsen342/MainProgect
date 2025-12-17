import React from 'react'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/Articles.svg'

export interface SideBarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly: boolean
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.about,
    text: 'О нас',
    Icon: MainIcon,
    authOnly: false,
  },
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: AboutIcon,
    authOnly: false,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticlesIcon,
    authOnly: true,
  },
]
