import {createEntityAdapter,createSlice} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { ArticlCommentListSchema } from '../types/ArticleCommentListSchema'




const commentsAdapter = createEntityAdapter<Comment,string>({
  selectId: (comment:Comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsComment || commentsAdapter.getInitialState())

const articleCommentListSlice = createSlice({
  name: 'articleCommentListSlice',
  initialState: commentsAdapter.getInitialState<ArticlCommentListSchema>({
    isLoading:false,
    ids:['1','2'],
    entities:{
        '1':{
            id:'1',
            text:'some comment',
            user:{id:'1',userName:'Dqizi'}
        },
        '2':{
            id:'2',
            text:'some comment',
            user:{id:'2',userName:'Dqizi'}
        }
    },
  }),
  reducers: {
    
  },
})

export const {reducer:articleCommentListReducer} = articleCommentListSlice
export const {actions:articleCommentListAction} = articleCommentListSlice