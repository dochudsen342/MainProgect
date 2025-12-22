import { classNames } from '@/shared/lib/classNames/classNames'
import { HTMLAttributes, ReactNode } from 'react'
import cl from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  theme?: CardTheme
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...otherProps
}: CardProps) => {
  return (
    <div {...otherProps} className={classNames(cl.Card, {}, [className, cl[theme]])}>
      {children}
    </div>
  )
}
