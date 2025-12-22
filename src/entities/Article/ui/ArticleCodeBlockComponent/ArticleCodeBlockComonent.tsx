import { classNames } from '@/shared/lib/classNames/classNames'
import { Code } from '@/shared/ui/Code'
import { Text } from '@/shared/ui/Text'
import { ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComonentProps {
  className?: string
  block?: ArticleCodeBlock
}

const ArticleCodeBlockComonent = ({ className, block }: ArticleCodeBlockComonentProps) => {
  return (
    <div className={classNames('', {}, [className])}>
      {block?.title && <Text title={block?.title} />}
      {block?.code && <Code text={block.code} />}
    </div>
  )
}

export default ArticleCodeBlockComonent
