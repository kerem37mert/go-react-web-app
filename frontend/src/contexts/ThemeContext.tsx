import React, {createContext, ReactNode, useEffect, useState} from "react";

const ThemeContext= createContext();

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if(storedTheme)
            setTheme(storedTheme)
        else
            setTheme("light")
    }, []);

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export {
    ThemeContext,
    ThemeProvider
}
