import React from 'react'
import cl from './ArticleCodeBlock.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleCodeBlock } from '../../model/types/article'
import Text from 'shared/ui/Text/Text'
import Code from 'shared/ui/Code/Code'

interface ArticleCodeBlockComonentProps {
  className?: string
  block?: ArticleCodeBlock
}

const ArticleCodeBlockComonent = ({ className, block }: ArticleCodeBlockComonentProps) => {
  return (
    <div className={classNames(cl.ArticleCodeBlockComonent, {}, [className])}>
      {block?.title && <Text title={block?.title} className={cl.title} />}
      {block?.code && <Code text={block.code} className={cl.code} />}
    </div>
  )
}

export default ArticleCodeBlockComonent
