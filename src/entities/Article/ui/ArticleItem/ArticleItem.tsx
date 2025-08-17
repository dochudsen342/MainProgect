import React, { useCallback } from 'react'
import cl from './ArticleItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import Text from 'shared/ui/Text/Text'
import Icon from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/EyeView.svg'
import Card from 'shared/ui/Card/Card'
import { useHover, UseHoverResult } from 'shared/lib/hooks/useHover'
import Avatar from 'shared/ui/Avatar/Avatar'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import ArticleTextBlockComonent from '../ArticleTextBlockComponent/ArticleTextBlockComonent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleItemProps {
  className?: string,
  article: Article,
  view?: ArticleView,
}

const ArticleItem = ({ className, article, view }: ArticleItemProps) => {
  const {t} = useTranslation()
  const [isHover, bindHover] = useHover()
  const types = <Text text={article?.type.join(',')} className={cl.types} />
  const views = (
    <>
      <Text text={String(article?.views)} className={cl.views} />
      <Icon className={cl.icon} Svg={EyeIcon} />
    </>
  )
  const navigate =  useNavigate()
  const onOpenArticle = useCallback(() =>{
    navigate(RoutePath.article_deteails + article.id)
  },[article.id,navigate])

  if (view === ArticleView.BIG) {
    let textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
    return (
      <div className={classNames(cl.ArticleItem, {}, [className, cl[view]])}>
        <Card>
          <div className={cl.header}>
            <Avatar size={30} src={article?.user?.avatar} />
            <Text text={article.user.username} className={cl.userName} />
            <Text text={article.createdDate} className={cl.date} />
          </div>
          <Text className={cl.title} title={article.title} />
          {types}
          <img src={article.img} alt={article.title}  className={cl.img}/>
          {textBlock && (<ArticleTextBlockComonent block={textBlock} className={cl.textBlock}/>)}
          <div className={cl.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>{t('Читать далее...')}</Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div {...bindHover as object} className={classNames(cl.ArticleItem, {}, [className, cl[view]])}>
      <Card onClick={onOpenArticle}>
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
    </div>
  )
}

export default ArticleItem