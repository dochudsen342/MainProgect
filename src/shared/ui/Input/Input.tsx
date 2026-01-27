import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import cl from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
type InputTheme = 'outline' | 'clear'

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

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    autoFocus,
    inputTheme = 'clear',
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
