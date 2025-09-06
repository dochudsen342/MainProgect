import React, { useCallback, useMemo } from 'react'
import cl from './ArticlesFillterPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ArcticleSortField, ArticleView } from 'entities/Article'
import { articlePageAction } from '../../model/slice/articlePageSlice'
import { useSelector } from 'react-redux'
import { getArticleListOrder, getArticleListSearch, getArticleListSort, getArticleListTypeValue, getArticleListView } from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'
import { useTranslation } from 'react-i18next'
import Card from 'shared/ui/Card/Card'
import Input, { inputTheme } from 'shared/ui/Input/Input'
import { ArticleSortSelector } from 'features/ArticleSortSelector'
import { SortOrder } from 'shared/types'
import { fetchArticleList } from '../../model/service/fetchArticleList.ts/fetchArticleList'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs'
import {  ArcticleType } from 'entities/Article/model/types/article'

interface ArticlesFillterPageProps {
    className?: string,
}

const ArticlesFillterPage = ({ className }: ArticlesFillterPageProps) => {
    const { t } = useTranslation()
    const view = useSelector(getArticleListView)
    const order = useSelector(getArticleListOrder)
    const sort = useSelector(getArticleListSort)
    const search = useSelector(getArticleListSearch)
    const typeValue = useSelector(getArticleListTypeValue)
    const typeTabs = useMemo<TabItem[]>(() =>{
        return [
            {
                value:ArcticleType.ALL,
                content:t('Все')
            },
            {
                value:ArcticleType.ECONOMY,
                content:t('Экономика')
            },
            {
                value:ArcticleType.IT,
                content:t('IT')
            },
            {
                value:ArcticleType.SCIENCE,
                content:t('Наука')
            },
            {
                value:ArcticleType.TECH,
                content:t('Инженерия')
            },
        ]
    },[t])
    const dispatch = useAppDispatch() 

    const fetchData = useCallback(() =>{
        dispatch(fetchArticleList({replace:true}))
    },[dispatch])
    
    const fetchDebounceData = useDebounce(fetchData,500)
    
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view))
        dispatch(articlePageAction.setPage(1))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArcticleSortField) => {
        dispatch(articlePageAction.setSort(newSort))    
        dispatch(articlePageAction.setPage(1))
        fetchData()
    }, [dispatch,fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageAction.setOrder(newOrder))
        dispatch(articlePageAction.setPage(1))
        fetchData()
    }, [dispatch,fetchData])

     const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlePageAction.setSearch(newSearch))
        dispatch(articlePageAction.setPage(1))
        fetchDebounceData()
    }, [dispatch,fetchData])
    
    const onChangeTabs = useCallback((newTabs:TabItem) =>{
        dispatch(articlePageAction.setTabs(newTabs.value as ArcticleType))
        fetchData()
    },[])

    return (
        <div className={classNames(cl.ArticlesFillterPage, {}, [className])}>
            <div className={cl.sortWrapper}>
                <ArticleSortSelector onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}  order={order} sort={sort}/>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cl.search}>
                <Input value={search} onChange={onChangeSearch} className={cl.searchInput} inputTheme={inputTheme.CLEAR}/>
            </Card>
            <Tabs tabs={typeTabs} value={typeValue} onTabClick={onChangeTabs}/>
        </div>
    )
}

export default ArticlesFillterPage