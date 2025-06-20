import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userAction } from 'entities/User'


interface NavbarProps {
  classNames: string
}

export const Navbar = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const { t } = useTranslation()
  const userAuthData = useSelector(getAuthData)
  const dispatch = useDispatch()
  const onToggleModal = useCallback(() => {
    setIsModalAuth(prev => !prev)
  }, [isModalAuth])

  const onLogout = useCallback(() =>{
    dispatch(userAction.logout())
  },[dispatch])

  if (userAuthData) {
    return <div className={classNames(cl.navbar)}>
      <Button square onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED} className={cl.links}>
        {t('Выйти')}
      </Button>
    </div>
  }

  return (
    <div className={classNames(cl.navbar)}>
      <Button square onClick={onToggleModal} theme={ThemeButton.CLEAR_INVERTED} className={cl.links}>
        {t('Войти')}
      </Button>
      {isModalAuth && <LoginModal isOpen={isModalAuth} onClose={onToggleModal} />}
    </div>
  )
}

