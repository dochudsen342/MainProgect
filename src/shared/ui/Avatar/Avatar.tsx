import React, { useMemo } from 'react'
import cl from './Avatar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface AvatarProps {
  src?: string
  className?: string
  size?: number
  alt?: string
}

export const Avatar = ({ src, className, size, alt }: AvatarProps) => {
  const style = useMemo(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <img src={src} className={classNames(cl.Avatar, {}, [className])} style={style} alt={alt} />
  )
}
