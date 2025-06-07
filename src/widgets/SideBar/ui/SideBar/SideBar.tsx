import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import cl from './SideBar.module.scss'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SideBarProps {
  className?: string,
}



const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [className])}>
      <Button
        square={false}
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cl.SideBarBtn}>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cl.items}>
        <div>
          <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.main}
            className={cl.item}
            >
            <MainIcon className={cl.icon} />
            <span className={cl.link}>{t('Главная')}</span>
          </AppLink>
        </div>
        <div>
          <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.about}
            className={cl.item}
            >  
            <AboutIcon className={cl.icon} />
            <span className={cl.link}>{t('О нас')}</span>
          </AppLink>
        </div>
      </div>
      <div className={classNames(cl.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}

export default SideBar
