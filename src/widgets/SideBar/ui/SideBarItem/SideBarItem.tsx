import { getAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { SideBarItemType } from '../../model/types/sidebar'
import cl from './SideBarItem.module.scss'

interface SideBarItemProps {
  item: SideBarItemType
  collapsed: boolean
}

const SideBarItem = memo(({ item, collapsed, ...otherProps }: SideBarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getAuthData)

  if (!isAuth && item?.authOnly) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
      className={classNames(cl.item, { [cl.collapsed]: collapsed })}
      {...otherProps}
    >
      <item.Icon className={cl.icon} />
      <span className={classNames(cl.link)}>{t(item.text)}</span>
    </AppLink>
  )
})

export default SideBarItem
