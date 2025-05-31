import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'


interface NavbarProps {
  classNames: string
}

export const Navbar = () => {

  
  return (
    <div className={classNames(cl.navbar)}>
      <div className={cl.links}>
        <AppLink to='/' className={cl.link_navbar}>Главная</AppLink>
        <AppLink to='/about' className={cl.link_navbar}>О нас</AppLink>
      </div>
    </div>
  )
}

