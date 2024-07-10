import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = ({ src, alt }) => {
    return(
        <Link to="/">
            <img className="navbar-logo" src={src} alt={alt}/>
        </Link>

    );
}

export default Logo;
