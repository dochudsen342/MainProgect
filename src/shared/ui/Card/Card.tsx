import React, { HTMLAttributes, ReactNode } from 'react'
import cl from './Card.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  theme?: CardTheme
}

const Card = ({ className, children, theme = CardTheme.NORMAL, ...otherProps }: CardProps) => {
  return (
    <div {...otherProps} className={classNames(cl.Card, {}, [className, cl[theme]])}>
      {children}
    </div>
  )
}

export default Card
