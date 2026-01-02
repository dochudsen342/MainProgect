import { ArticleBlockType } from '@/entities/Article/model/types/article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { articleCrudFormAction } from '../../model/slice/articleCrudSlice'
import cl from './AddBlockPanel.module.scss'

interface AddBlockPanelProps {
  className?: string
}

const generateId = () => {
  return `block-${Date.now()}`
}

const AddBlockPanel = memo(({ className }: AddBlockPanelProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onAddTextBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      articleCrudFormAction.addBlock({
        id: id,
        type: ArticleBlockType.TEXT,
        title: '',
        paragraphs: [],
      })
    )
  }, [dispatch, generateId])
  const onAddCodeBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      articleCrudFormAction.addBlock({
        id: id,
        type: ArticleBlockType.CODE,
        title: '',
        code: '',
      })
    )
  }, [dispatch, generateId])

  const onAddImgBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      articleCrudFormAction.addBlock({
        id: id,
        type: ArticleBlockType.IMAGE,
        title: '',
        src: '',
      })
    )
  }, [dispatch, generateId])
  return (
    <div className={classNames(cl.AddBlockPanel, {}, [className])}>
      <Button onClick={onAddTextBlock}>{t('Добавить блок с текстом')}</Button>
      <Button onClick={onAddImgBlock}>{t('Добавить изображение')}</Button>
      <Button onClick={onAddCodeBlock}>{t('Добавить блок с кодом')}</Button>
    </div>
  )
})

export default AddBlockPanel
