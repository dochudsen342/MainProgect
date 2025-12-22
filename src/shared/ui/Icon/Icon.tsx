import React from 'react'
import cl from './Icon.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

interface iconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  theme?: IconFill
}

export enum IconFill {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const Icon = ({ className, Svg, theme = IconFill.SECONDARY, ...othersProps }: iconProps) => {
  const mods: Mods = {
    [cl[theme]]: true,
  }

  return <Svg {...othersProps} className={classNames(cl.icon, mods, [className])} />
}
