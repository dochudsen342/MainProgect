import React, { FC, PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

const ThemeProvider:FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const defaultProps = useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme])
    return (
        <ThemeContext.Provider value={
            {
                theme,
                setTheme,
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
