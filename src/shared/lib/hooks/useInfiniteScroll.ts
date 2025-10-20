import { RefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: RefObject<HTMLDivElement | null>
  wrapperRef: RefObject<HTMLElement | null>
}

export const useInfiniteScroll = ({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) => {
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
      if (triggerElement) {
        observer.observe(triggerElement)
      }

      return () => {
        if (observer && triggerElement) {
          observer.unobserve(triggerElement)
        }
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
