import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticlesIcon from '@/shared/assets/icons/Articles.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'
import React from 'react'

export interface SideBarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly: boolean
  testId: string
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: getRouteAbout(),
    text: 'О нас',
    Icon: MainIcon,
    authOnly: false,
    testId: 'AboutLink',
  },
  {
    path: getRouteMain(),
    text: 'Главная',
    Icon: AboutIcon,
    authOnly: false,
    testId: 'MainLink',
  },
  {
    path: getRouteProfile(':id'),
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
    testId: 'ProfileLink',
  },
  {
    path: getRouteArticles(),
    text: 'Статьи',
    Icon: ArticlesIcon,
    authOnly: true,
    testId: 'ArticlesLink',
  },
]
