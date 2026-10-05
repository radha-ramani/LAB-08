import { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>

            {isLoggedIn && (
                <Navbar setIsLoggedIn={setIsLoggedIn} />
            )}

            <Routes>

                <Route
                    path="/"
                    element={
                        isLoggedIn
                            ? <Navigate to="/dashboard" />
                            : <Login setIsLoggedIn={setIsLoggedIn} />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        isLoggedIn
                            ? <Dashboard />
                            : <Navigate to="/" />
                    }
                />

                <Route
                    path="/profile"
                    element={
                        isLoggedIn
                            ? <Profile />
                            : <Navigate to="/" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;