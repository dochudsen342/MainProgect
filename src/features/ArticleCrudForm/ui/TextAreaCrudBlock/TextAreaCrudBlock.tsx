import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { TextArea } from '@/shared/ui/TextArea'
import { memo, useCallback } from 'react'
import { articleCrudFormAction } from '../../model/slice/articleCrudSlice'

interface TextAreaArticleBlockProps {
  className?: string
  id: string
  placeholder?: string
  value?: string
  rows?: number
}

const TextAreaCrudBlock = memo(
  ({ className, id, placeholder, value, rows }: TextAreaArticleBlockProps) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = useCallback(
      (value: string) => {
        dispatch(articleCrudFormAction.updateBlockContent({ id: id, content: value }))
      },
      [id]
    )
    return (
      <TextArea
        onChange={onChangeHandler}
        placeholder={placeholder}
        rows={rows}
        value={value}
        className={classNames('', {}, [className])}
      />
    )
  }
)

export default TextAreaCrudBlock
