import { RefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: RefObject<HTMLDivElement>
  wrapperRef: RefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null

    if (callback) {
      const wrapperElement = wrapperRef.current
      const triggerElement = triggerRef.current
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)
      observer.observe(triggerElement)
      return () => {
        if (observer) {
          observer.unobserve(triggerElement)
        }
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
