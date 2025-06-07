import React, { FC, PropsWithChildren } from 'react'
import cl from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'


export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?:AppLinkTheme

}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ to, children,className,theme } ) => {

  return (
    <Link className={classNames(cl.AppLink,{[cl[theme]]:true},[className])} to={to}>
      {children}
    </Link>
  )
}


