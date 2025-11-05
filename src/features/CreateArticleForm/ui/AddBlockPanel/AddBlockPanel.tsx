import React, { ReactNode, useCallback } from 'react'
import cl from './AddBlockPanel.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { createArticleFormAction } from '../../model/slice/createArticleFormSlice'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import TextAreaArticleBlock from '../TextAreaArticleBlock/TextAreaArticleBlock'
import { useTranslation } from 'react-i18next'
import Input, { InputTheme } from 'shared/ui/Input/Input'

interface AddBlockPanelProps {
  className?: string
  setBlocks: React.Dispatch<React.SetStateAction<React.ReactNode[]>>
}

const generateId = () => {
  return `block-${Date.now()}}`
}

const AddBlockPanel = ({ className, setBlocks }: AddBlockPanelProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onAddTextBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      createArticleFormAction.addBlock({
        id: id,
        type: ArticleBlockType.TEXT,
        title: '',
        paragraphs: [],
      })
    )
    setBlocks((prev: ReactNode[]) => [
      ...prev,
      <TextAreaArticleBlock id={id} placeholder={t('Введите текст...')} rows={3} />,
    ])
  }, [setBlocks])
  const onAddCodeBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      createArticleFormAction.addBlock({
        id: id,
        type: ArticleBlockType.CODE,
        title: '',
        code: '',
      })
    )
    setBlocks((prev: ReactNode[]) => [
      ...prev,
      <TextAreaArticleBlock id={id} placeholder={t('Введите код...')} rows={3} />,
    ])
  }, [setBlocks])

  const onAddImgBlock = useCallback(() => {
    const id = generateId()
    dispatch(
      createArticleFormAction.addBlock({
        id: id,
        type: ArticleBlockType.IMAGE,
        title: '',
        src: '',
      })
    )
    setBlocks((prev: ReactNode[]) => [
      ...prev,
      <Input
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Ссылка на фото статьи')}
      />,
    ])
  }, [setBlocks])
  return (
    <div className={classNames(cl.AddBlockPanel, {}, [className])}>
      <Button onClick={onAddTextBlock} className={cl.addBlockBtn}>
        {t('Добавить блок с текстом')}
      </Button>
      <Button onClick={onAddImgBlock} className={cl.addBlockBtn}>
        {t('Добавить изображение')}
      </Button>
      <Button onClick={onAddCodeBlock} className={cl.addBlockBtn}>
        {t('Добавить блок с кодом')}
      </Button>
    </div>
  )
}

export default AddBlockPanel
