import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getArticleDetailsData } from './getArticleDetailsData'
import { ArcticleType, Article } from '../../types/article'

describe('getLoginError.test', () => {
  test('should return ArticleDetaildata', () => {
    const articleDetailsData: Article = {
      id: '1',
      title: 'some title',
      createdDate: '',
      blocks: [],
      type: [ArcticleType.ECONOMY],
      user: { id: '1', username: 'Dqizi' },
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: articleDetailsData, isLoading: false },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(articleDetailsData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
