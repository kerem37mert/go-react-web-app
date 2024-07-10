import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Contexts
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/home";

// Components
import Navbar from "./components/Navbar";


const App: React.FC = () => {
    return(
        <ThemeProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
