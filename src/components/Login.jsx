import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (username === "" || password === "") {
            setError("Please enter username and password.");
            return;
        }

        if (username === "student" && password === "1234") {

            setIsLoggedIn(true);

            navigate("/dashboard");

        } else {

            setError("Invalid username or password.");
        }
    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h1>Student Portal</h1>

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <p className="error">
                            {error}
                        </p>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="demo">
                    Username: student<br />
                    Password: 1234
                </p>

            </div>

        </div>
    );
}

export default Login;