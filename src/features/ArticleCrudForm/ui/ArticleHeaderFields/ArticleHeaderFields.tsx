import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getCrudArticleData } from '../../model/selectors/getCrudArticleSelectors/getCrudArticleSelectors'
import { articleCrudFormAction } from '../../model/slice/articleCrudSlice'
import cl from './ArticleHeaderFields.module.scss'

interface TitleArticleFormProps {
  className?: string
}

const ArticleHeaderFields = memo(({ className }: TitleArticleFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const articleData = useSelector(getCrudArticleData)
  const onChangeArticleTitle = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setTitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleSubtitle = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setSubtitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleImgLink = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setArticleImgLink(value))
    },
    [dispatch]
  )

  return (
    <div className={classNames(cl.TitleArticleForm, {}, [className])}>
      <Input
        onChange={onChangeArticleTitle}
        className={cl.inputMainInfo}
        inputTheme='outline'
        placeholder={t('Заголовок статьи')}
        value={articleData?.title}
      />
      <Input
        onChange={onChangeArticleSubtitle}
        className={cl.inputMainInfo}
        inputTheme='outline'
        placeholder={t('Подзаголовок статьи')}
        value={articleData?.subtitle}
      />
      <Input
        onChange={onChangeArticleImgLink}
        className={cl.inputMainInfo}
        inputTheme='outline'
        placeholder={t('Ссылка на фото статьи')}
        value={articleData?.img}
      />
    </div>
  )
})

export default ArticleHeaderFields
