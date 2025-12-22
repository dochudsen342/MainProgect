import React, { CSSProperties } from 'react'
import cl from './Skeleton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = ({ className, border, height, width }: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }
  return <div style={styles} className={classNames(cl.Skeleton, {}, [className])}></div>
}
