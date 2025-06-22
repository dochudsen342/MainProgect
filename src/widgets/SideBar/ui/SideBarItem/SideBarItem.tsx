import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SideBarItemType } from '../../model/itemsType'
import cl from './SideBarItem.module.scss'
import { memo } from 'react'

interface SideBarItemProps {
    item: SideBarItemType,
    collapsed: boolean
}

const SideBarItem = memo(({ item ,collapsed}: SideBarItemProps) => {
    const { t } = useTranslation()
    return (    
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to={item.path}
                className={classNames(cl.item,{[cl.collapsed]:collapsed})}
            >
                <item.Icon className={cl.icon} />
                <span className={classNames(cl.link)}>{t(item.text)}</span>
            </AppLink>
    )
})

export default SideBarItem