import { MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce(callbak: (...args: any[]) => void, delay: number) {
  const timer = useRef(false) as MutableRefObject<any>

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callbak(...args)
      }, delay)
    },
    [delay, callbak],
  )
}
