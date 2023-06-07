import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blog';
import { ThemeContext, themes } from './context/theme-context';

export default function LightAndDarkMode() {
    const [theme, setTheme] = useState(themes.light);

    function changeTheme() {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    }

    useEffect(() => {
        let docBody = document.body;
        switch (theme) {
            case themes.light:
                docBody.classList.remove("bg-slate-900");
                docBody.classList.remove("text-white");
                docBody.classList.add("bg-slate-50");
                docBody.classList.add("text-black");
                break;
            case themes.dark:
                docBody.classList.remove("bg-slate-50");
                docBody.classList.remove("text-black");
                docBody.classList.add("bg-slate-900");
                docBody.classList.add("text-white");
                break;
            default:
                break;
        }
    })

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <Blog theme={theme} />
        </ThemeContext.Provider>
    )
}
