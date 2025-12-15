import React, { memo, ReactNode } from 'react'
import cl from './Drawer.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import Portal from '../Portal/Portal'
import Overlay from '../Overlay/Overlay'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const Drawer = memo(({ className, children, isOpen, onClose }: DrawerProps) => {
  const { theme } = useTheme()
  const mods: Mods = {
    [cl.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cl.content}>{children}</div>
      </div>
    </Portal>
  )
})

export default Drawer
