import React, { HTMLAttributes, ReactNode } from 'react'
import cl from './Card.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: ReactNode,
}

const Card = ({ className, children, ...otherProps }: CardProps) => {

    return (
        <div {...otherProps} className={classNames(cl.Card, {}, [className])}>
            {children}
        </div>
    )
}

export default Card