import React, { useCallback } from 'react'
import cl from './EditTextAreaBlock.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import TextArea from 'shared/ui/TextArea/TextArea'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { editArticleFormAction } from '../../model/slice/editArticleSlice'

interface EditTextAriaBlockProps {
  className?: string
  id: string
  placeholder?: string
  value?: string
  rows?: number
}

const EditTextAriaBlock = ({ className, id, placeholder, value, rows }: EditTextAriaBlockProps) => {
  const dispatch = useAppDispatch()

  const onChangeHandler = useCallback(
    (value: string) => {
      dispatch(editArticleFormAction.updateBlockContent({ id: id, content: value }))
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

export default EditTextAriaBlock
