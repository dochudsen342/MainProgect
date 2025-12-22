import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cl from './ArticleImageBlock.module.scss'

interface ArticleImageBlockComonentProps {
  className?: string
  block?: ArticleImageBlock
}

const ArticleImageBlockComonent = ({ className, block }: ArticleImageBlockComonentProps) => {
  return (
    <div className={classNames(cl.ArticleImageBlockComonent, {}, [className])}>
      <img src={block?.src} alt='' />
      {block?.title && <Text text={block.title} />}
    </div>
  )
}

export default ArticleImageBlockComonent
