import React, { ReactNode, useEffect, useState } from 'react'
import cl from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'




interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {

    const {theme} = useTheme()
    const [isMounted,setIsMounted] = useState(false)

    const mods: Record<string, boolean> = {
        [cl.opened]: isOpen,
    }

    useEffect(() =>{
        if(isOpen){
            setIsMounted(true)
        }
        
    },[isOpen])

    const onCloseHandler = () => {
        if (onClose) {
            onClose()
        }
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    if(lazy && !isMounted){
        return null
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
