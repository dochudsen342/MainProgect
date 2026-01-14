import { getAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import { getRouteArticleCreate } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cl from './Navbar.module.scss'

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
        <AppLink className={cl.createBtn} theme={AppLinkTheme.PRIMARY} to={getRouteArticleCreate()}>
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
      <Button square onClick={onOpen} theme='clear_inverted' className={cl.links}>
        {t('Войти')}
      </Button>
      {isModalAuth && <LoginModal isOpen={isModalAuth} onClose={onClose} />}
    </header>
  )
}
