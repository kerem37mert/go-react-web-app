import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Contexts
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

const App: React.FC = () => {
    return(
        <ThemeProvider>
            <RouterProvider router={ router } />
        </ThemeProvider>
    );
}

export default App
