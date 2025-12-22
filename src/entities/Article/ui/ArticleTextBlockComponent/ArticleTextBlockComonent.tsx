import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cl from './ArticleTextBlock.module.scss'

interface ArticleTextBlockComonentProps {
  className?: string
  block?: ArticleTextBlock
}

const ArticleTextBlockComonent = ({ className, block }: ArticleTextBlockComonentProps) => {
  return (
    <div className={classNames(cl.ArticleTextBlockComonent, {}, [className])}>
      {block?.title && <Text size={TextSize.L} title={block.title} className={cl.title} />}
      {block?.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cl.paragraph} />
      ))}
    </div>
  )
}

export default ArticleTextBlockComonent
