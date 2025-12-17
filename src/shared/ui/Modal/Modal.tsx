import React, { ReactNode } from 'react'
import cl from './Modal.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import Portal from '../Portal/Portal'
import { useTheme } from '@/app/providers/ThemeProvider'
import Overlay from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { theme } = useTheme()
  const { isMounted, onCloseHandler } = useModal({ isOpen, onClose })

  if (lazy && !isMounted) {
    return null
  }
  const mods: Mods = {
    [cl.opened as keyof typeof cl]: isOpen,
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
