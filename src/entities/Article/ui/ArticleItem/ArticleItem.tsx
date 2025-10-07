import React, { HTMLAttributeAnchorTarget } from 'react'
import cl from './ArticleItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import Text from 'shared/ui/Text/Text'
import Icon from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/EyeView.svg'
import Card from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover'
import Avatar from 'shared/ui/Avatar/Avatar'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import ArticleTextBlockComonent from '../ArticleTextBlockComponent/ArticleTextBlockComonent'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ArticleItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const ArticleItem = ({ className, article, view, target }: ArticleItemProps) => {
  const { t } = useTranslation()
  const [bindHover] = useHover()
  const types = <Text text={article?.type.join(',')} className={cl.types} />
  const views = (
    <>
      <Text text={String(article?.views)} className={cl.views} />
      <Icon className={cl.icon} Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.BIG) {
    let textBlock = article?.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock
    return (
      <div className={classNames(cl.ArticleItem, {}, [className, cl[view]])}>
        <Card>
          <div className={cl.header}>
            <Avatar size={30} src={article?.user?.avatar} />
            <Text text={article?.user.username} className={cl.userName} />
            <Text text={article?.createdDate} className={cl.date} />
          </div>
          <Text className={cl.title} title={article?.title} />
          {types}
          <img src={article?.img} alt={article?.title} className={cl.img} />
          {textBlock && <ArticleTextBlockComonent block={textBlock} className={cl.textBlock} />}
          <div className={cl.footer}>
            <AppLink target={target} to={RoutePath.article_deteails + article?.id}>
              <Button theme={ThemeButton.OUTLINE}>{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_deteails + article?.id}
      {...(bindHover as object)}
      className={classNames(cl.ArticleItem, {}, [className, cl[view]])}
    >
      <Card>
        <div className={cl.imageWrapper}>
          <img alt={article?.title} className={cl.img} src={article?.img} />
          <Text text={article?.createdDate} className={cl.date} />
        </div>
        <div className={cl.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article?.title} className={cl.title} />
      </Card>
    </AppLink>
  )
}

export default ArticleItem
