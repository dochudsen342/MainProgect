import React, { ReactNode } from 'react'

import cl from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'




interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen: boolean,
    onClose: () => void,
}

const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {

    const {theme} = useTheme()

    const mods: Record<string, boolean> = {
        [cl.opened]: isOpen,
    }

    const onCloseHandler = () => {

        if (onClose) {
            onClose()
        }
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <Portal>
            <div className={classNames(cl.Modal, mods,[theme])}>
                <div onClick={onCloseHandler} className={cl.overlay}>
                    <div className={classNames(cl.content,{[cl[theme]]:true})} onClick={(e) => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>  
        </Portal>
    )
}

export default Modal
