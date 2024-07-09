import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.tsx";

// Style
import "./Navbar.style.css";

const Navbar: React.FC = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <div className={`navbar-container-${theme}`}>
            Navbar
        </div>
    );
}

export default Navbar;
