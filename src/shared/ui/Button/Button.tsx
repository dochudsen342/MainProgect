import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cl from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  SIZE_M = 'sizeM',
  SIZE_X = 'sizeX',
  SIZE_XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    theme = ThemeButton.OUTLINE,
    children,
    className,
    square,
    size,
    disabled,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cl[theme]]: true,
    [cl.square]: square,
    [cl[size]]: true,
    [cl.disabled]: disabled,
  }

  return (
    <button
      disabled={disabled}
      {...otherProps}
      className={classNames(cl.Button, mods, [className])}
    >
      {children}
    </button>
  )
}

export default Button
