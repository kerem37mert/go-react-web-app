import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Style
import "./Navbar.style.css";

// Components
import Logo from "./Logo.tsx";
import LinkItem from "./LinkItem.tsx";
import ThemeButton from "./ThemeButton.tsx";

const Navbar: React.FC = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <div className={`navbar`}>
            <Logo src="/img/logo.png" alt="Text Queue" />
            <div className="navbar-link-container">
                <LinkItem  to="/" text="Ana Sayfa" />
                <LinkItem  to="/" text="Profil" />
                <ThemeButton />
            </div>
        </div>
    );
}

export default Navbar;
