import { useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from '@/shared/ui/Button/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import Drawer from '@/shared/ui/Drawer/Drawer'
import { NotificationList } from '@/entities/Notification'
import { useGetNotificationsList } from '@/entities/Notification/api/notificationApi'

interface NavbarProps {
  classNames: string
}

export const Navbar = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const { t } = useTranslation()
  const userAuthData = useSelector(getAuthData)
  const onOpen = useCallback(() => {
    setIsModalAuth(true)
  }, [isModalAuth])
  const onClose = useCallback(() => {
    setIsModalAuth(false)
  }, [isModalAuth])

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
        <HStack gap={'16'} className={cl.actions}>
          <NotificationButton />
          <AvatarDropdown setIsModalAuth={setIsModalAuth} />
        </HStack>
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
