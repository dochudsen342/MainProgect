export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETEAILS = 'article_deteails',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
  ADMIN_PANEL = 'admin_panel',
  //error
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id?: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleEdit = (id?: string) => `/articles/${id}/edit`
export const getRouteArticleCreate = () => '/acticles/create'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteAdminPanel = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
export const getRouteNotFound = () => '*'
