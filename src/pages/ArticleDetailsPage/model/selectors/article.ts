import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from '@/entities/Article'
import { getAuthData } from '@/entities/User'

export const getCanUserEditinsArticle = createSelector(
  getAuthData,
  getArticleDetailsData,
  (user, article) => {
    if (!user || !article) {
      return false
    }

    return article.user.id === user.id
  },
)
