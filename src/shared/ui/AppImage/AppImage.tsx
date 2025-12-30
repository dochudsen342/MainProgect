import { ImgHTMLAttributes, ReactNode, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactNode
  errorFallback?: ReactNode
}

const AppImage = ({
  className,
  src,
  alt = 'img',
  fallback,
  errorFallback,
  ...otherProps
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''

    img.onload = () => {
      setIsLoading(false)
    }

    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return <img {...otherProps} src={src} alt={alt} className={className} />
}

export default AppImage
