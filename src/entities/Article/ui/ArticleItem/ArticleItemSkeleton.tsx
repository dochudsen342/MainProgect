import { classNames } from 'shared/lib/classNames/classNames'
import { useHover } from 'shared/lib/hooks/useHover'
import Card from 'shared/ui/Card/Card'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/types/article'
import cl from './ArticleItem.module.scss'

interface ArticleItemSkeletonProps {
  className?: string
  view?: ArticleView
}

const ArticleItemSkeleton = ({ className, view }: ArticleItemSkeletonProps) => {
  const [isHover, bindHover] = useHover()

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cl.ArticleItem, {}, [className, cl[view]])}>
        <Card>
          <div className={cl.header}>
            <Skeleton border='50%' width={30} height={30} />
            <Skeleton className={cl.userName} width={70} height={20} />
          </div>
          <Skeleton border='3px' className={cl.title} width={'100%'} height={200} />
          <div className={cl.footer}>
            <Skeleton border='3px' className={cl.button} width={'100%'} height={30} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div {...(bindHover as object)} className={classNames(cl.ArticleItem, {}, [className, cl[view]])}>
      <Card>
        <div className={cl.imageWrapper}>
          <Skeleton width={200} height={200} className={cl.img} />
        </div>
        <div className={cl.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  )
}

export default ArticleItemSkeleton
