import { ReactNode, UIEvent, useRef } from 'react'
import { scrollRestorationAction } from 'features/ScrollRestoration'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useThrottle } from 'shared/lib/hooks/useThrottle'
import cl from './PageWrapper.module.scss'

interface PageWrapperProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

const PageWrapper = ({ className, children, onScrollEnd }: PageWrapperProps) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestorationAction.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    )
  }, 1000)

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cl.PageWrapper, {}, [className])}
    >
      {children}
      <div className={cl.infiniteTrigger} ref={triggerRef}></div>
    </main>
  )
}

export default PageWrapper
