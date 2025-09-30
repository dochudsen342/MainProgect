import { useCallback, useRef } from 'react'

export function useThrottle(callbak: (...args: any[]) => void, delay: number) {
  const thottleRef = useRef(false)

  return useCallback(
    (...args: any[]) => {
      if (!thottleRef.current) {
        callbak(...args)
        thottleRef.current = true
        setTimeout(() => {
          thottleRef.current = false
        }, delay)
      }
    },
    [delay, callbak],
  )
}
