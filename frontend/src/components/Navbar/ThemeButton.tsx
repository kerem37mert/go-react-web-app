import React, { useContext } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Context
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeButton: React.FC = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const themeChangeHandler = () => {
        if(theme == "light")
            setTheme("dark");
        else
            setTheme("light");
    }

    return(
        <>
            {
            theme == "light" ?
                <DarkModeIcon className="theme-button" onClick={themeChangeHandler} /> :
                <LightModeIcon className="theme-button" onClick={themeChangeHandler} />
            }
        </>

    );
}

export default ThemeButton;
