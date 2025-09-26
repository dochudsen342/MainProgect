import { lazy } from "react";

export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! 
    setTimeout(() => resolve(import('./ArticleEditPage')), 400)
}));
