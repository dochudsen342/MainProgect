import React, { ChangeEvent, memo, useCallback, useMemo } from 'react'
import cl from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

export interface SelectOptions {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

const Select = memo(({ className, label, options, value, readonly, onChange }: SelectProps) => {
  const optionsList = useMemo(() => {
    if (options) {
      return options.map((opt) => (
        <option className={cl.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      ))
    }
  }, [options])

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={classNames(cl.Wrapper, {}, [className])}>
      {label && <span className={cl.label}>{label}</span>}
      <select onChange={onChangeSelect} disabled={readonly} className={cl.select} value={value} name='' id=''>
        {optionsList}
      </select>
    </div>
  )
})

export default Select
