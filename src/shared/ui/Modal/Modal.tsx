import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal'
import { ReactNode } from 'react'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cl from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
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
