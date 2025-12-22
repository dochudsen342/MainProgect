import React from 'react'
import cl from './PageLoader.module.scss'
import { Spiner } from '@/shared/ui/Spiner'

const PageLoader = () => {
  return (
    <div className={cl.PageLoader}>
      <Spiner />
    </div>
  )
}

export default PageLoader
