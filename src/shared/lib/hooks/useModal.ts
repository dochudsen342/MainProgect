import { useEffect, useState } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
}
export function useModal({ isOpen, onClose }: UseModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }

  return { isMounted, onCloseHandler }
}
