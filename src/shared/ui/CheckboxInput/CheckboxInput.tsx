import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import cl from './CheckboxInput.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Text, { TextWeight } from '../Text/Text'
import { ArcticleType } from 'entities/Article/model/types/article'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

interface CheckboxInputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  chekboxText?: string
  textWeight?: TextWeight
  onChange: (value: ArcticleType) => void
  onDeleteValue: (value: ArcticleType) => void
  inputTheme?: InputTheme
  disabled?: boolean
}

const CheckboxInput = (props: CheckboxInputProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const {
    className,
    chekboxText,
    type = 'checkbox',
    value,
    onChange,
    onDeleteValue,
    inputTheme = InputTheme.OUTLINE,
    disabled,
    textWeight = TextWeight.MEDIUM,
    ...outherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange(e.target.value as ArcticleType)
    } else {
      onDeleteValue(e.target.value as ArcticleType)
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const mods = {
    [cl[inputTheme]]: true,
  }

  return (
    <div className={cl.inputWrapper}>
      {chekboxText && (
        <Text textWeight={textWeight} className={cl.checkboxText} text={chekboxText} />
      )}
      <input
        ref={inputRef}
        type={type}
        onChange={onChangeHandler}
        value={value}
        className={classNames(cl.InputCheckbox, mods, [className])}
        {...outherProps}
      />
    </div>
  )
}

export default CheckboxInput
