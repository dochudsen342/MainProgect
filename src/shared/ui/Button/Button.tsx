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

const buttonSizeClasses: Record<ButtonSize, string> = {
  sizeM: cl.sizeM,
  sizeX: cl.sizeX,
  sizeXL: cl.sizeXl,
  size_fit_content: cl.size_fit_content,
}

const themeButtonClasses: Record<ThemeButton, string> = {
  clear: cl.clear,
  background: cl.background,
  backgroundInverted: cl.backgroundInverted,
  clear_inverted: cl.clear_inverted,
  outline: cl.outline,
  outlineRed: cl.outlineRed,
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
    theme = 'outline',
    children,
    className,
    square = false,
    size = 'sizeM',
    disabled,
    ...otherProps
  } = props

  const classes = [className, buttonSizeClasses[size], themeButtonClasses[theme]]

  const mods: Mods = {
    [cl.square]: square,
    [cl.disabled]: disabled,
  }

  return (
    <button disabled={disabled} {...otherProps} className={classNames(cl.Button, mods, classes)}>
      {children}
    </button>
  )
}
