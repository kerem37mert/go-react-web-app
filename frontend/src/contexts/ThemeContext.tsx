import React, { createContext, useState } from "react";

const ThemeContext= createContext();

const ThemeProvider: React.FC = ({ children }) => {

    const [theme, setTheme] = useState<"light" | "dark">("light")

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
