import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "entities/User";
import { SideBarItemType } from "../types/sidebar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/Articles.svg'

export const getSideBarItems = createSelector(
    getAuthData,
    (userData) => {

        const sideBarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.about,
                text: 'О нас',
                Icon: MainIcon,
                authOnly: false
            },
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: AboutIcon,
                authOnly: false
            },
        ]

        if (userData) {
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true
                },
            )
        }
        return sideBarItemsList

    }
)