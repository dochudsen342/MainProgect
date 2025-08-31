import { ReactNode, RefObject, useRef } from 'react'
import cl from './PageWrapper.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface PageWrapperProps {
  className?: string,
  children:ReactNode,
  onScrollEnd?:() => void
}

const PageWrapper = ({className,children,onScrollEnd}:PageWrapperProps) => {
     const wrapperRef = useRef<HTMLElement>(null)
     const triggerRef = useRef<HTMLDivElement>(null)

     useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback:onScrollEnd
     })
  return (
    <section  ref = {wrapperRef} className= {classNames(cl.PageWrapper, {}, [className])}>
        {children}
        <div ref={triggerRef}></div>
    </section>
  )
}

export default PageWrapper