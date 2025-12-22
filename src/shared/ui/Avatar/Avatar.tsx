import { classNames } from '@/shared/lib/classNames/classNames'
import { useMemo } from 'react'
import cl from './Avatar.module.scss'

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
