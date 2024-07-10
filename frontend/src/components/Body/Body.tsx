import React, { ReactNode, useContext } from "react";

// Style
import "./Body.style.css";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

interface BodyProps {
    children: ReactNode
}

const Body: React.FC<BodyProps> = ({ children }) => {

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`body body-${theme}`}>
            { children }
        </div>
    );
}

export default Body;
