import React, { useCallback } from 'react'
import cl from './TextAreaArticleBlock.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import TextArea from 'shared/ui/TextArea/TextArea'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { editArticleFormAction } from 'features/EditArticleForm/model/slice/editArticleSlice'
import { createArticleFormAction } from '../../model/slice/createArticleFormSlice'

interface TextAreaArticleBlockProps {
  className?: string
  id: string
  placeholder?: string
  value?: string
  rows?: number
}

const TextAreaArticleBlock = ({
  className,
  id,
  placeholder,
  value,
  rows,
}: TextAreaArticleBlockProps) => {
  const dispatch = useAppDispatch()

  const onChangeHandler = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.updateBlockContent({ id: id, content: value }))
    },
    [id]
  )
  return (
    <TextArea
      onChange={onChangeHandler}
      placeholder={placeholder}
      rows={rows}
      value={value}
      className={classNames(cl.TextAreaArticleBlock, {}, [className])}
    />
  )
}

export default TextAreaArticleBlock
