import { getAuthData } from '@/entities/User'
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
import { createSelector } from '@reduxjs/toolkit'
import { SideBarItemType } from '../types/sidebar'

export const getSideBarItems = createSelector(getAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    {
      path: getRouteAbout(),
      text: 'О нас',
      Icon: MainIcon,
      authOnly: false,
    },
    {
      path: getRouteMain(),
      text: 'Главная',
      Icon: AboutIcon,
      authOnly: false,
    },
  ]

  if (userData) {
    sideBarItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    )
  }
  return sideBarItemsList
})
