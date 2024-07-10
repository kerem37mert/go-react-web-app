import React from "react";
import {Link} from "react-router-dom";


interface LinkItemProps {
    to: string,
    text: string
}

const LinkItem: React.FC<LinkItemProps> = ({ to, text }) => {
    return(
        <Link className="navbar-link" to={ to } >{ text }</Link>
    );
}

export default LinkItem;
