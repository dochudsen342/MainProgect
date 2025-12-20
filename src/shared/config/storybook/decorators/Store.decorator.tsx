import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { ArticleDetailsReducers } from '@/entities/Article/model/slice/articleDetailsSlice'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsPageReducers } from '@/pages/ArticleDetailsPage/model/slices'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: ArticleDetailsReducers,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducers,
}

const StoreDecorator =
  (state: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => (Story: any) => {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
        <Story />
      </StoreProvider>
    )
  }

export default StoreDecorator
