import React, { memo, ReactNode } from 'react'
import cl from './Drawer.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import Portal from '../Portal/Portal'
import Overlay from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Drawer = memo(({ className, children, isOpen, lazy, onClose }: DrawerProps) => {
  const { theme } = useTheme()
  const { onCloseHandler, isMounted } = useModal({ isOpen, onClose })
  const mods: Mods = {
    [cl.opened]: isOpen,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onCloseHandler} />
        <div className={cl.content}>{children}</div>
      </div>
    </Portal>
  )
})

export default Drawer
