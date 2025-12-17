import React from 'react'
import cl from './Icon.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

interface iconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  theme?: IconFill
}

export enum IconFill {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const Icon = ({ className, Svg, theme = IconFill.SECONDARY }: iconProps) => {
  const mods: Mods = {
    [cl[theme]]: true,
  }

  return <Svg className={classNames(cl.icon, mods, [className])} />
}

export default Icon
