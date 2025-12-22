import { Spiner } from '@/shared/ui/Spiner'
import cl from './PageLoader.module.scss'

const PageLoader = () => {
  return (
    <div className={cl.PageLoader}>
      <Spiner />
    </div>
  )
}

export default PageLoader
