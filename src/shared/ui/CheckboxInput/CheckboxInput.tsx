import { ArcticleType } from '@/entities/Article/model/types/article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react'
import { Text, TextWeight } from '../Text/Text'
import cl from './CheckboxInput.module.scss'

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
  isChecked?: boolean
  onChange?: (value: ArcticleType) => void
  onDeleteValue?: (value: ArcticleType) => void
  inputTheme?: InputTheme
  disabled?: boolean
}

export const CheckboxInput = memo((props: CheckboxInputProps) => {
  const {
    className,
    chekboxText,
    type = 'checkbox',
    value,
    onChange,
    onDeleteValue,
    isChecked,
    inputTheme = InputTheme.OUTLINE,
    disabled,
    textWeight = TextWeight.MEDIUM,
    ...outherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange?.(e.target.value as ArcticleType)
    } else {
      onDeleteValue?.(e.target.value as ArcticleType)
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
        checked={isChecked}
        className={classNames(cl.InputCheckbox, mods, [className])}
        {...outherProps}
      />
    </div>
  )
})
