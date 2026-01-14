import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCanUserEditinsArticle } from '../../model/selectors/article'
import cl from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isEditing = useSelector(getCanUserEditinsArticle)
  const articleData = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])
  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(articleData?.id))
  }, [articleData?.id, navigate])

  return (
    <div className={classNames(cl.ArticleDetailsPageHeader, {}, [className])}>
      <Button className={cl.backBtn} onClick={onBackToList} theme='outline'>
        {t('Назад к списку')}
      </Button>
      {isEditing && (
        <Button onClick={onEditArticle} className={cl.EditBtn} theme='outline'>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
}

export default ArticleDetailsPageHeader
