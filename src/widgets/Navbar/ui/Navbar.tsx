import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'


interface NavbarProps {
  classNames: string
}

export const Navbar = () => {

  const {t} = useTranslation()

  return (
    <div className={classNames(cl.navbar)}>
      <div className={cl.links}>
       
      </div>
    </div>
  )
}

