import React from 'react'
import Modal from 'shared/ui/Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './LoginForm.module.scss'

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}



const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames(cl.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    )
}

export default LoginModal
