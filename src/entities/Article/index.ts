import ArticleDetails from "./ui/ArticleDeteils/ArticleDetails";
import type { Article} from "./model/types/article";
import type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { ArticleView } from "./model/types/article";
import ArticleList from "./ui/ArticleList/ArticleList";
import { ArcticleSortField } from "./model/types/article";
import { getArticleDetailsData } from "./model/selectors/getArticleDetailsData/getArticleDetailsData";
export {
    ArticleDetails,
    ArticleList,
    getArticleDetailsData,
    Article,
    ArticleDetailsSchema,
    ArticleView,
    ArcticleSortField
}