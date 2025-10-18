import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getAuthData, isUserAdmin, isUserManager, userAction } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Dropdown from 'shared/ui/Dropdown/Dropdown'
import Avatar from 'shared/ui/Avatar/Avatar'
import { getUserRoles } from 'entities/User/model/selectors/roleSelector/roleSelector'

interface NavbarProps {
  classNames: string
}

export const Navbar = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const { t } = useTranslation()
  const userAuthData = useSelector(getAuthData)
  const dispatch = useAppDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvalible = isAdmin || isManager

  const onOpen = useCallback(() => {
    setIsModalAuth(true)
  }, [isModalAuth])

  const onClose = useCallback(() => {
    setIsModalAuth(false)
  }, [isModalAuth])

  const onLogout = useCallback(() => {
    dispatch(userAction.logout())
    setIsModalAuth(false)
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(cl.navbar)}>
        <AppLink
          className={cl.createBtn}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.article_create}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          className={cl.dropdown}
          direction='bottom left'
          items={[
            {
              content: t('Профиль'),
              href: RoutePath.profile + userAuthData.id,
            },
            { content: t('Выйти'), onClick: onLogout, href: '' },
            ...(isAdminPanelAvalible
              ? [{ content: t('Админка'), href: RoutePath.admin_panel }]
              : []),
          ]}
          trigger={<Avatar size={30} src={userAuthData?.avatar} />}
        />
      </div>
    )
  }

  return (
    <header className={classNames(cl.navbar)}>
      <Button square onClick={onOpen} theme={ThemeButton.CLEAR_INVERTED} className={cl.links}>
        {t('Войти')}
      </Button>
      {isModalAuth && <LoginModal isOpen={isModalAuth} onClose={onClose} />}
    </header>
  )
}
