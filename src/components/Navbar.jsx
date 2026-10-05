import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const handleLogout = () => {

        setIsLoggedIn(false);

        navigate("/");
    };

    return (
        <nav className="navbar">

            <h2>Student Portal</h2>

            <div className="nav-links">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/profile">
                    Profile
                </Link>

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;