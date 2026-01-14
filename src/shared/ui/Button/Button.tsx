import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cl from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
}
export enum ButtonSize {
  SIZE_M = 'sizeM',
  SIZE_X = 'sizeX',
  SIZE_XL = 'sizeXL',
  SIZE_FIT_CONTENT = 'size_fit_content',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    theme = ThemeButton.OUTLINE,
    children,
    className,
    square = false,
    size = '',
    disabled,
    ...otherProps
  } = props

  const mods: Mods = {
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
