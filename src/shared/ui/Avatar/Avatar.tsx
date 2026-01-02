import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useMemo } from 'react'
import UserIcon from '../../assets/icons/userDefaultAvatar.svg'
import AppImage from '../AppImage/AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import cl from './Avatar.module.scss'
//добавить инвертед тему для fallback
interface AvatarProps {
  src?: string
  className?: string
  size?: number
  alt?: string
}

export const Avatar = memo(({ src, className, size, alt }: AvatarProps) => {
  const style = useMemo(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])
  const errorFallback = <Icon className='' width={size} height={size} Svg={UserIcon} />
  const fallback = <Skeleton width={size} height={size} border='50%' />

  return (
    <AppImage
      errorFallback={errorFallback}
      fallback={fallback}
      src={src}
      className={classNames(cl.Avatar, {}, [className])}
      style={style}
      alt={alt}
    />
  )
})
