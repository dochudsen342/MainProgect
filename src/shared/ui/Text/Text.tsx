import React from 'react'
import cl from './Text.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

export enum TextSize {
  M = 'size_M',
  L = 'size_L',
}

export enum TextWeight {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAligin {
  CENTRE = 'centre',
  LEFT = 'left',
  RIGHT = 'right',
}
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
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
}

export const Text = ({
  className,
  textWeight = TextWeight.MEDIUM,
  title,
  text,
  theme = ThemeText.PRIMARY,
  aligin = TextAligin.LEFT,
  size = TextSize.M,
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
