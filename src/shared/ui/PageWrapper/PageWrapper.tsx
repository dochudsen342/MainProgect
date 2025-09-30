import { ReactNode, UIEvent, useEffect, useRef } from 'react'
import { StateSchema } from 'app/providers/StoreProvider'
import { getScrollRestorationByPath, scrollRestorationAction } from 'features/ScrollRestoration'
import { useSelector } from 'react-redux'
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
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollRestorationByPath(state, pathname),
  )

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
      }),
    )
  }, 1000)

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [scrollPosition])
  return (
    <section
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cl.PageWrapper, {}, [className])}
    >
      {children}
      <div className={cl.infiniteTrigger} ref={triggerRef}></div>
    </section>
  )
}

export default PageWrapper
