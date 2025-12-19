import React, { Suspense } from 'react'
import Modal from '@/shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { classNames } from '@/shared/lib/classNames/classNames'
import Spiner from '@/shared/ui/Spiner/Spiner'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy className={classNames('', {}, [className])}>
      <Suspense fallback={<Spiner />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}

export default LoginModal
