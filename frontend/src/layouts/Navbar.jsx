import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/common/Button";

function Navbar() {
    const { currentUser, logout } = useAuth();

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/dashboard"
                    className="text-2xl font-bold text-emerald-600"
                >
                    Reditus
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <Link to="/dashboard" className="hover:text-emerald-600">
                        Dashboard
                    </Link>

                    <Link to="/lost" className="hover:text-emerald-600">
                        Lost
                    </Link>

                    <Link to="/found" className="hover:text-emerald-600">
                        Found
                    </Link>

                    <Link to="/" className="hover:text-emerald-600">
                        Browse
                    </Link>

                    <Link to="/" className="hover:text-emerald-600">
                        My Reports
                    </Link>
                </nav>

                {/* User */}
                <div className="flex items-center gap-4">
                    <span className="hidden md:block text-gray-600 text-sm">
                        {currentUser?.email}
                    </span>

                    <Button
                        variant="danger"
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;