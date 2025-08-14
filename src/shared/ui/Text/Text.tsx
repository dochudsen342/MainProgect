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
<<<<<<< HEAD
        <div className={classNames(cl.Text, mods, [className || ''])}>

=======
        <div className={classNames(cl.Text, {}, [className || ''])}>
>>>>>>> parent of 8a68835 (Merge branch 'main' of https://github.com/dochudsen342/MainProgect)
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.subtitle}>{text}</p>}
        </div>
    )
}

export default Text