import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getArticleDetailsData } from './getArticleDetailsData'

describe('getLoginError.test', () => {
  test('should return ArticleDetaildata', () => {
    const articleDetailsData = {
      id: '1',
      title: 'some title',
      user: { id: '1', username: 'Dqizi' },
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: articleDetailsData },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(articleDetailsData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
