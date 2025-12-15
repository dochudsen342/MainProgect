import React, { ReactNode, useEffect, useState } from 'react'
import cl from './Modal.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import Overlay from '../Overlay/Overlay'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const mods: Mods = {
    [cl.opened as keyof typeof cl]: isOpen,
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cl.Modal, mods, [theme])}>
        <Overlay onClick={onCloseHandler} />
        <div className={classNames(cl.content, { [cl[theme]]: true })}>{children}</div>
      </div>
    </Portal>
  )
}

export default Modal
