import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useCancellReloadPage = () => {
  const location = useLocation()

  return useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [location])
}
