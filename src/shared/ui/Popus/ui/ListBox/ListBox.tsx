import { Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cl from './ListBox.module.scss'
import popupCl from '../styles/popup.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import Button, { ThemeButton } from '../../../Button/Button'
import { HStack } from '../../../Stack'

export interface ListBoxItem {
  value: string
  content: ReactNode
  unavailable?: boolean
}

export type ListBoxDirection = 'top' | 'bottom'

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  readonly?: boolean
  direction?: ListBoxDirection
  label?: string
  onChange: (value: string) => void
}

const Listbox = ({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom',
  label,
}: ListBoxProps) => {
  const optionsClasses = [className, cl[direction]]

  return (
    <HStack>
      {label && <span className={cl.trigger_label}>{label}</span>}
      <HListBox
        as={'div'}
        disabled={readonly}
        className={classNames(cl.ListBox, {}, [className, popupCl.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={popupCl.trigger}>
          <Button className={cl.Btn} disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>

        <HListBox.Options className={classNames(cl.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.unavailable}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cl.item,
                    { [popupCl.active]: active, [popupCl.disabled]: item.unavailable },
                    []
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}

export default Listbox
