import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cl from './Text.module.scss'

export type TextSize = 'size_M' | 'size_L'
export type TextWeight = 'small' | 'medium' | 'large'
export type ThemeText = 'primary' | 'error'
export type TextAligin = 'centre' | 'left' | 'right'
type HeaderTag = 'h1' | 'h2' | 'h3'
type TextMarginTop = '0' | '8' | '12' | '16'

interface TextProps {
  className?: string
  title?: string
  text?: string
  textWeight?: TextWeight
  theme?: ThemeText
  aligin?: TextAligin
  size?: TextSize
  marginTop?: TextMarginTop
}

const TextMarginTopClasses: Record<TextMarginTop, string> = {
  '0': '',
  '8': cl.margin8,
  '12': cl.margin12,
  '16': cl.margin16,
}
const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  size_L: 'h1',
  size_M: 'h2',
}

export const Text = memo(
  ({
    className,
    textWeight = 'medium',
    title,
    text,
    theme = 'primary',
    aligin = 'left',
    size = 'size_M',
    marginTop = '0',
  }: TextProps) => {
    const mods: Mods = {
      [cl[theme]]: true,
      [cl[aligin]]: true,
      [cl[size as keyof typeof cl]]: true,
      [cl[textWeight]]: true,
    }

    const textMarginClass = TextMarginTopClasses[marginTop]
    const HeaderTag = mapSizeToHeaderTag[size]

    return (
      <div className={classNames(cl.Text, mods, [className, textMarginClass])}>
        {title && <HeaderTag className={cl.title}>{title}</HeaderTag>}
        {text && <p className={cl.text}>{text}</p>}
      </div>
    )
  }
)
