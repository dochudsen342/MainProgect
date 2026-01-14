import { ArticleView } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/viewBig.svg'
import TiledIcon from '@/shared/assets/icons/viewSmall.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { memo } from 'react'
import cl from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
  className?: string
  onViewClick?: (newView: ArticleView) => void
  view: ArticleView
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
]

const ArticleViewSelector = memo(({ className, onViewClick, view }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }
  return (
    <div className={classNames(cl.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => {
        return (
          <Button key={index} onClick={onClick(viewType.view)} theme='clear'>
            <Icon
              className={classNames(cl.icon, { [cl.Selected]: viewType.view === view })}
              Svg={viewType.icon}
            />
          </Button>
        )
      })}
    </div>
  )
})

export default ArticleViewSelector
