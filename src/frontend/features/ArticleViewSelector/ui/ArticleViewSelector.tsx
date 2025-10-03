import React from 'react'
import cl from './ArticleViewSelector.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleView } from 'entities/Article'
import ListIcon from 'shared/assets/icons/viewBig.svg'
import TiledIcon from 'shared/assets/icons/viewSmall.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Icon from 'shared/ui/Icon/Icon'

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

const ArticleViewSelector = ({ className, onViewClick, view }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    console.log(newView)
    onViewClick?.(newView)
  }
  return (
    <div className={classNames(cl.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => {
        return (
          <Button key={index} onClick={onClick(viewType.view)} theme={ThemeButton.CLEAR}>
            <Icon
              className={classNames(cl.icon, { [cl.Selected]: viewType.view === view })}
              Svg={viewType.icon}
            />
          </Button>
        )
      })}
    </div>
  )
}

export default ArticleViewSelector
