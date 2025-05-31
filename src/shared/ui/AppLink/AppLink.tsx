import React, { FC, PropsWithChildren } from 'react'
import cl from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'


export enum AppLinkTheme {
  PRIMYRY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className: string,
    
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ to,children, className }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}


