import React, { ReactNode, useCallback, useState } from 'react'
import cl from './AritlceCreateForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleHeaderFields from '../ArticleHeaderFields/ArticleHeaderFields'
import ArticleTypeSelector from '../ArticleTypeSelector/ArticleTypeSelector'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getCrudArticleData,
  getCrudArticleIsLoading,
} from '../../model/selectors/getCrudArticleSelectors/getCrudArticleSelectors'
import AddBlockPanel from '../AddBlockPanel/AddBlockPanel'
import { PageLoader } from 'widgets/PageLoader'
import { fetchCreateArticle } from '../../model/service/fetchCreateArticle/fetchCreateArticle'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import TextAreaCrudBlock from '../TextAreaCrudBlock/TextAreaCrudBlock'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'

interface ArticleCreateFormProps {
  className?: string
}

const ArticleCreateForm = ({ className }: ArticleCreateFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleData = useSelector(getCrudArticleData)
  const isLoading = useSelector(getCrudArticleIsLoading)

  const onCreateArticle = useCallback(() => {
    dispatch(fetchCreateArticle())
  }, [dispatch])

  const renderBlocks = useCallback(
    (item: ArticleBlock) => {
      switch (item.type) {
        case ArticleBlockType.TEXT:
          return (
            <TextAreaCrudBlock
              id={item.id}
              className={cl.textAreaBlock}
              placeholder={t('Введите текст...')}
              key={item.id}
              value={item.paragraphs.join('\n')}
            />
          )
        case ArticleBlockType.CODE:
          return (
            <TextAreaCrudBlock
              className={cl.textAreaBlock}
              placeholder={t('Введите код...')}
              id={item.id}
              key={item.id}
              value={item.code}
            />
          )
        case ArticleBlockType.IMAGE:
          return (
            <TextAreaCrudBlock
              className={cl.textAreaBlock}
              placeholder={t('Введите ссылку на фото...')}
              id={item.id}
              key={item.id}
              value={item.src}
            />
          )
        default:
          return null
      }
    },
    [t]
  )

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <div className={classNames(cl.ArticleCreateForm, {}, [className])}>
        <div className={cl.createArticleFom__mainInfo}>
          <ArticleHeaderFields className={cl.articleMainFields} />
          <ArticleTypeSelector />
        </div>
        <div className={cl.blocksWrapper}>{articleData?.blocks.map(renderBlocks)}</div>
        <AddBlockPanel />
      </div>
      <Button onClick={onCreateArticle} theme={ThemeButton.OUTLINE}>
        {t('Создать статью')}
      </Button>
    </>
  )
}

export default ArticleCreateForm
