import { StateSchema } from 'app/providers/StoreProvider'
import { ArcticleType } from 'entities/Article/model/types/article'

export const getCreateArticleType = (state: StateSchema) =>
  state?.articleCreatePage?.data.type || ArcticleType.IT

export const getCreateArticleTitle = (state: StateSchema) =>
  state?.articleCreatePage?.data.title || ''

export const getCreateArticleSubtitle = (state: StateSchema) =>
  state?.articleCreatePage?.data.subtitle || ''

export const getCreateArticleImgLink = (state: StateSchema) =>
  state?.articleCreatePage?.data.img || ''

export const getCreateArticleViews = (state: StateSchema) =>
  state.articleCreatePage?.data.views || Math.ceil(Math.random() * 1000)

export const getCreateArticleBlocks = (state: StateSchema) =>
  state.articleCreatePage?.data.blocks || []

export const getCreateArticleError = (state: StateSchema) => state?.articleCreatePage?.error || ''

export const getCreatorArticleIsLoading = (state: StateSchema) =>
  state?.articleCreatePage?.isLoading || false

export const getCreatorAriticleIsCreated = (state: StateSchema) =>
  state.articleCreatePage?.isCreated || false

export const getCreatedAriticleId = (state: StateSchema) =>
  state.articleCreatePage?.createdArticleId || ''
