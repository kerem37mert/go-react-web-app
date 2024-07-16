import React, {ReactNode} from "react";

// Style
import "./Main.style.css";

interface MainProps {
    children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return(
        <div className="main">
            { children }
        </div>
    );
}

export default Main;
