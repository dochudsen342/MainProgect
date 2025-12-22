import React, { useCallback } from 'react'
import cl from './Code.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ThemeButton } from '../Button/Button'
import CopyIcon from '../../assets/icons/Vector (1).svg'

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cl.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        size={ButtonSize.SIZE_M}
        theme={ThemeButton.CLEAR}
        className={cl.copyBtn}
      >
        <CopyIcon className={cl.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
