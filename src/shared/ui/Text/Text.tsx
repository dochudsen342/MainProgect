import React, { useMemo } from 'react'
import cl from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'


export enum TextSize {
    M = 'size_M',
    L = 'size_L',
}

export enum ThemeText {
    ERROR = "error",
}


export enum TextAligin {
    CENTRE = 'centre',
    LEFT = 'left',
    RIGHT = 'right'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: ThemeText,
    aligin?: TextAligin,
    size?:TextSize,
}

const Text = ({ className, title, text, theme, aligin,size = TextSize.M }: TextProps) => {

    const mods:Record<string,boolean> = {
            [cl[theme]]: true,
            [cl[aligin]]: true,
            [cl[size]]:true,
    }
           
    
    return (
        <div className={classNames(cl.Text, mods, [className || ''])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.subtitle}>{text}</p>}
        </div>
    )
}

export default Text