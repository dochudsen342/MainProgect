import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import Modal from 'shared/ui/Modal/Modal'
import Button, { ThemeButton } from 'shared/ui/Button/Button'


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
        <Modal  onClose={onToggleModal} isOpen = {isModalAuth}>
          askasjdlkasd alsdkjqkq asldjznxnca qlwjelkja alsjdlzncla qwjelajwln lcnalnsl qlwndlna lqnwldnq lnqwdlnql dqlndwlkn
        </Modal>
    </div>
  )
}

