import { Menu, Popover as HPopover } from '@headlessui/react'
import popupCl from '../styles/popup.module.scss'
import cl from './Popover.module.scss'
import { ReactNode } from 'react'
import { DropDownDirection } from 'shared/types/ui'
import { mapDirectionClass } from '../styles/consts'
import { classNames } from 'shared/lib/classNames/classNames'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropDownDirection
  children: ReactNode
}

const Popover = (props: PopoverProps) => {
  const { trigger, direction = 'bottom right', className, children } = props
  const panelClasses = [mapDirectionClass[direction], className]

  return (
    <HPopover className={classNames(cl.Popover, {}, [className, popupCl.popup])}>
      <HPopover.Button className={popupCl.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cl.panel, {}, panelClasses)}>{children}</HPopover.Panel>
    </HPopover>
  )
}

export default Popover
