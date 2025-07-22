import React from 'react'
import cl from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?:string,
}

const Text = ({ className, title, text }: TextProps) => {

    return (
        <div className={classNames(cl.Text, {}, [className || ''])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.subtitle}>{text}</p>}
        </div>
    )
}

export default Text