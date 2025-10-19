import { ReactNode, UIEvent, useRef } from 'react'
import { scrollRestorationAction } from 'features/ScrollRestoration'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useThrottle } from 'shared/lib/hooks/useThrottle'
import cl from './PageWrapper.module.scss'

type PageWrapperOwerflowY = 'auto' | 'hidden'

const pageWrapperOwerflowYClasses: Record<PageWrapperOwerflowY, string> = {
  auto: cl.owerflowYAuto,
  hidden: cl.owerflowYHidden,
}

interface PageWrapperProps {
  className?: string
  children: ReactNode
  overflowY?: PageWrapperOwerflowY
  onScrollEnd?: () => void
}

const PageWrapper = ({
  className,
  children,
  onScrollEnd,
  overflowY = 'auto',
}: PageWrapperProps) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const pageWrapperAditionalClasses = [className, pageWrapperOwerflowYClasses[overflowY]]
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
      className={classNames(cl.PageWrapper, {}, pageWrapperAditionalClasses)}
    >
      {children}
      <div className={cl.infiniteTrigger} ref={triggerRef}></div>
    </main>
  )
}

export default PageWrapper
