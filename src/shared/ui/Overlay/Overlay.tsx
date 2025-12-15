import React from 'react'
import cl from './Overlay.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

const Overlay = ({ className, onClick }: OverlayProps) => {
  return <div onClick={onClick} className={classNames(cl.Overlay, {}, [className])}></div>
}

export default Overlay
