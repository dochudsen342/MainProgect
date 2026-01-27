import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cl from './Button.module.scss'

export type ButtonSize = 'sizeM' | 'sizeX' | 'sizeXL' | 'size_fit_content'
export type ThemeButton =
  | 'clear'
  | 'background'
  | 'backgroundInverted'
  | 'clear_inverted'
  | 'outline'
  | 'outlineRed'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    theme = 'outline',
    children,
    className,
    square = false,
    size = 'sizeM',
    disabled,
    ...otherProps
  } = props

  const classes = [className]

  const mods: Mods = {
    [cl[size]]: true,
    [cl[theme]]: true,
    [cl.square]: square,
    [cl.disabled]: disabled,
  }

  return (
    <button disabled={disabled} {...otherProps} className={classNames(cl.Button, mods, classes)}>
      {children}
    </button>
  )
}
