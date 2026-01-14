import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cl from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  target?: HTMLAttributeAnchorTarget
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({
  to,
  children,
  className,
  theme = AppLinkTheme.PRIMARY,
  target,
  ...otherProps
}) => {
  return (
    <Link
      target={target}
      className={classNames(cl.AppLink, { [cl[theme]]: true }, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
