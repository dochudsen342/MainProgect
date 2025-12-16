import React, { memo, ReactNode, useEffect } from 'react'
import cl from './Drawer.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import Portal from '../Portal/Portal'
import Overlay from '../Overlay/Overlay'
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider/AnimationProvider'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}
const height = window.innerHeight - 260

const DrawerContent = memo(({ className, children, isOpen, lazy, onClose }: DrawerProps) => {
  const { theme } = useTheme()
  const { Gesture, Spring } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = () => {
    api.start({
      y: 0,
      immediate: false,
    })
  }

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer()
        } else {
          openDrawer()
        }
      } else api.start({ y: my, immediate: true })
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  )

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={classNames(cl.Drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={closeDrawer} />
        <Spring.a.div
          className={cl.sheet}
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
})

const Drawer = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()
  if (!isLoaded) {
    return null
  }
  return <DrawerContent {...props} />
})

export default Drawer
