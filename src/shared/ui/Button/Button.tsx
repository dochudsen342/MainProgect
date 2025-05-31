import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cl from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
    CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string,
    theme?:ThemeButton,
}

const Button:FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {theme,children,className, ...otherProps} = props
  return (
    <button {...otherProps}  className={classNames(cl.Button,{[cl[theme]]:true},[className])}>
        {children}
    </button>
  )
}

export default Button
