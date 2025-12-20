import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import cl from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  placeholder?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  inputTheme?: InputTheme
  disabled?: boolean
}

const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    autoFocus,
    inputTheme = InputTheme.CLEAR,
    disabled,
    ...outherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods = {
    [cl[inputTheme]]: true,
  }
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={cl.inputWrapper}>
      <input
        ref={inputRef}
        type={type}
        onChange={onChangeHandler}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={classNames(cl.Input, mods, [className])}
        {...outherProps}
      />
    </div>
  )
})

export default Input
