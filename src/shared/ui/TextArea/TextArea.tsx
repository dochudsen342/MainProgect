import { classNames } from '@/shared/lib/classNames/classNames'
import {
  ChangeEvent,
  memo,
  ReactNode,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import cl from './TextArea.module.scss'

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string
  children?: ReactNode
  value?: string
  onChange?: (value: string) => void
}

export const TextArea = memo(
  ({ className, children, value, onChange, ...othersProps }: TextAreaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    useEffect(() => {
      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }, [])
    const handleInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }
      onChange?.(e.target.value)
    }, [])
    return (
      <textarea
        className={classNames(cl.TextArea, {}, [className])}
        onChange={handleInput}
        value={value}
        style={{}}
        ref={textareaRef}
        {...othersProps}
      >
        {children}
      </textarea>
    )
  }
)
