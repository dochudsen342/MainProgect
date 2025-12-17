import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cl from './Dropdown.module.scss'
import popupCl from '../styles/popup.module.scss'
import { Fragment } from 'react/jsx-runtime'
import { ReactNode } from 'react'
import { DropDownDirection } from '@/shared/types/ui'
import { Link, To } from 'react-router-dom'
import { mapDirectionClass } from '../styles/consts'

export interface DropdownItem {
  unavailable?: boolean
  content: ReactNode
  onClick?: () => void
  href: To
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropDownDirection
}

const Dropdown = ({ className, trigger, items, direction = 'bottom right' }: DropdownProps) => {
  const menuClasses = [mapDirectionClass[direction]]
  return (
    <Menu className={classNames(cl.Dropdown, {}, [className, popupCl.popup])} as={'div'}>
      <Menu.Button className={popupCl.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cl.menu, {}, menuClasses)}>
        {items.map((item) => {
          if (item.href) {
            return (
              <Menu.Item key={item.href as string} disabled={item.unavailable} as={Fragment}>
                {({ active }: { active: boolean }) => (
                  <Link
                    to={item.href}
                    className={classNames(cl.item, { [popupCl.active]: active })}
                  >
                    {item.content}
                  </Link>
                )}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={item.href} disabled={item.unavailable} as={Fragment}>
              {({ active }: { active: boolean }) => (
                <button
                  type='button'
                  disabled={item.unavailable}
                  onClick={item.onClick}
                  className={classNames(cl.item, { [popupCl.active]: active })}
                >
                  {item.content}
                </button>
              )}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
