import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import React, { memo } from 'react'
import cl from './Icon.module.scss'

interface iconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  theme?: IconFill
}

export type IconFill = 'primary' | 'secondary'

export const Icon = memo(({ className, Svg, theme = 'secondary', ...othersProps }: iconProps) => {
  const mods: Mods = {
    [cl[theme]]: true,
  }

  return <Svg {...othersProps} className={classNames(cl.icon, mods, [className])} />
})
