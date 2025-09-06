import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "shared/lib/CustomTypes/DeepPartial";
import {
    getArticleListHasMore,
    getArticleListIsLoading,
    getArticleListLimit, getArticleListOrder,
    getArticleListPage, getArticleListSearch,
    getArticleListSort, getArticleListView
} from "./getArticlePageSelectors";
import { ArcticleSortField, ArticleView } from "entities/Article";


describe('getArticlesSelectorsTests', () => {

    test('should return ArticlePageView', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                view: ArticleView.BIG
            },
        };
        expect(getArticleListView(state as StateSchema)).toEqual(ArticleView.BIG);
    });
    test('should work with empty View', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListView(state as StateSchema)).toEqual(undefined);
    });

    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should work with empty page', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListPage(state as StateSchema)).toEqual(1);
    });

    test('should work with empty limit', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListLimit(state as StateSchema)).toEqual(4);
    });

    test('should work with empty limit', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListHasMore(state as StateSchema)).toEqual(true);
    });

    test('should work with empty limit', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListOrder(state as StateSchema)).toEqual('asc');
    });

    test('should work with empty sort', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListSort(state as StateSchema)).toEqual(ArcticleSortField.CREATED);
    });

    test('should work with empty search', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListSearch(state as StateSchema)).toEqual('');
    });
})



