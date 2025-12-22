import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import './Spiner.scss'

export const Spiner = () => {
  return (
    <div className={classNames('lds-spinner')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
