import { classNames } from '@/shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Input, InputTheme } from '@/shared/ui/Input'
import { HStack } from '@/shared/ui/Stack'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cl from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const { t } = useTranslation()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormAction.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <HStack justify='between' max className={classNames(cl.AddCommentForm, {}, [className])}>
        <Input
          className={cl.input}
          inputTheme={InputTheme.OUTLINE}
          value={text || ''}
          placeholder={t('Введите комментарий')}
          onChange={onCommentTextChange}
        />
        <Button className={cl.sendBtn} onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicReducerLoader>
  )
}

export default AddCommentForm
