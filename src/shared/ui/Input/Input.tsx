import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import cl from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from '../Text/Text'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum inputTheme {
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    type?: string,
    placeholder?:string,
    chekboxText?:string,
    onChange?: (value: string) => void,
    autoFocus?:boolean,
    inputTheme?:inputTheme
    disabled?:boolean
}

const Input = memo(({ className, chekboxText, type = 'text', value, onChange,placeholder,autoFocus,inputTheme,disabled, ...outherProps }: InputProps) => {
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    onChange?.(e.target.value)
  }

  const mods = {
    [cl[inputTheme]]:true
  }
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
    if(autoFocus){
      inputRef.current.focus()
    }
  },[autoFocus])

  return (
    <div className={cl.inputWrapper}>
      {chekboxText && <Text className={cl.checkboxText} text={chekboxText}/>}
      <input
        ref = {inputRef}
        type={type}
        onChange={onChangeHandler}
        value={value}
        placeholder ={placeholder}
        disabled ={disabled}
        className={classNames(cl.Input,mods,[className])}
        {...outherProps}
      />
    </div>
  )
})

export default Input