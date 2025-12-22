import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { Spiner } from '@/shared/ui/Spiner'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
