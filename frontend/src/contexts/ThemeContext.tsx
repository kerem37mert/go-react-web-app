import React, {createContext, ReactNode, useState} from "react";

const ThemeContext= createContext();

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<"light" | "dark">("dark")

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
