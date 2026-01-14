import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { DetailedHTMLProps, HTMLAttributes, memo, ReactNode } from 'react'
import cl from './Flex.module.scss'

export type FlexJustify = 'start' | 'centre' | 'end' | 'between'
export type FlexAlign = 'start' | 'centre' | 'end'
export type FlexDirection = 'column' | 'row'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cl.justifyStart,
  centre: cl.justifyCentre,
  end: cl.justifyEnd,
  between: cl.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
  start: cl.alignStart,
  centre: cl.alignCentre,
  end: cl.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
  column: cl.directionColumn,
  row: cl.directionRow,
}

const flexGapClasses: Record<FlexGap, string> = {
  '4': cl.gap4,
  '8': cl.gap8,
  '16': cl.gap16,
  '32': cl.gap32,
}
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children?: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'centre',
    direction = 'row',
    gap = '16',
    max,
    ...otherProps
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    flexGapClasses[gap],
  ]

  const mods: Mods = {
    [cl.max]: max,
  }

  return (
    <div {...otherProps} className={classNames(cl.Flex, mods, classes)}>
      {children}
    </div>
  )
})

export default Flex
