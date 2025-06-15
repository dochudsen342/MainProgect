import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'


interface NavbarProps {
  classNames: string
}

export const Navbar = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const {t} = useTranslation()

  const onToggleModal = useCallback(() =>{
    setIsModalAuth(prev => !prev)
  },[isModalAuth])

  return (
    <div className={classNames(cl.navbar)}>
      <Button square onClick={onToggleModal}   theme={ThemeButton.CLEAR_INVERTED} className={cl.links}>
        {t('Войти')}
      </Button>
        <LoginModal isOpen = {isModalAuth} onClose={onToggleModal}/>
    </div>
  )
}

