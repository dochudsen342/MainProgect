import { Menu } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Dropdown.module.scss'
import { Fragment } from 'react/jsx-runtime'
import { ReactNode } from 'react'
import { DropDownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import { href } from 'react-router-dom'
import { Link } from 'react-router-dom'

export interface DropdownItem {
  unavailable?: boolean
  content: ReactNode
  onClick?: () => void
  href?: string
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom left': cl.optionsBottomLeft,
  'bottom right': cl.optionsBottomRight,
  'top left': cl.optionsTopLeft,
  'top right': cl.optionsTopRight,
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
    <Menu className={classNames(cl.Dropdown, {}, [className])} as={'div'}>
      <Menu.Button className={cl.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cl.menu, {}, menuClasses)}>
        {items.map((item) => {
          if (item.href) {
            return (
              <Menu.Item disabled={item.unavailable} as={Fragment}>
                {({ active }: { active: boolean }) => (
                  <Link to={item.href} className={classNames(cl.item, { [cl.active]: active })}>
                    {item.content}
                  </Link>
                )}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item disabled={item.unavailable} as={Fragment}>
              {({ active }: { active: boolean }) => (
                <button
                  type='button'
                  disabled={item.unavailable}
                  onClick={item.onClick}
                  className={classNames(cl.item, { [cl.active]: active })}
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
