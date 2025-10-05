import { useCallback, useMemo, useState } from 'react'

export interface UseHoverBind {
  onMouseLeave: () => void
  onMouseEnter: () => void
}

export type UseHoverResult = [boolean, UseHoverBind]

export const useHover = () => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [isHover])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [isHover])

  return useMemo(
    () => [isHover, { onMouseLeave, onMouseEnter }],
    [isHover, onMouseLeave, onMouseEnter],
  )
}
