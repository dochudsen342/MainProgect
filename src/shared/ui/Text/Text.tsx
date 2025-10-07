import React from 'react'
import cl from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

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
  ERROR = 'error',
}

export enum TextAligin {
  CENTRE = 'centre',
  LEFT = 'left',
  RIGHT = 'right',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  textWeight?: TextWeight
  theme?: ThemeText
  aligin?: TextAligin
  size?: TextSize
}

type HeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
}

const Text = ({
  className,
  textWeight,
  title,
  text,
  theme,
  aligin,
  size = TextSize.M,
}: TextProps) => {
  const mods: Record<string, boolean> = {
    [cl[theme]]: true,
    [cl[aligin]]: true,
    [cl[size]]: true,
    [cl[textWeight]]: true,
  }

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div className={classNames(cl.Text, mods, [className])}>
      {title && <HeaderTag className={cl.title}>{title}</HeaderTag>}
      {text && <p className={cl.text}>{text}</p>}
    </div>
  )
}

export default Text
