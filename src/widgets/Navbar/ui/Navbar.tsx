import { useCallback,useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userAction } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'


interface NavbarProps {
  classNames: string
}

export const Navbar = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const { t } = useTranslation()
  const userAuthData = useSelector(getAuthData)
  const dispatch = useAppDispatch()
  
  const onOpen = useCallback(() => {
    setIsModalAuth(true)
  }, [isModalAuth])

  const onClose = useCallback(() => {
    setIsModalAuth(false)
  }, [isModalAuth])

  const onLogout = useCallback(() =>{
    dispatch(userAction.logout())
    setIsModalAuth(false)
  },[dispatch])

  if (userAuthData) {
    return <div className={classNames(cl.navbar)}>
      <AppLink className={cl.createBtn} theme={AppLinkTheme.PRIMARY} to ={RoutePath.article_create}>
        {t('Создать статью')}
      </AppLink>
      <Button square onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED} className={cl.links}>
        {t('Выйти')}
      </Button>
    </div>
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

