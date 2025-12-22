import { classNames } from '@/shared/lib/classNames/classNames'
import cl from './ForbiddenPage.module.scss'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  return (
    <div className={classNames(cl.ForbiddenPage, {}, [className])}>
      <span>У вас нет прав для этой странницы!</span>
    </div>
  )
}

export default ForbiddenPage
