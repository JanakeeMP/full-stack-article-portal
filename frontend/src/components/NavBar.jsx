import { Link } from 'react-router-dom';
import useUser from '../useUser';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';

export default function NavBar() {
    const { isLoading, user } = useUser();

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg px-3 shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">InsightHub</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles">Articles</Link>
                        </li>
                    </ul>

                    {isLoading ? <li className="nav-item d-flex align-items-center gap-3">Loading...</li>
                        : (
                            <>
                                <li className="nav-item d-flex align-items-center gap-3">
                                    {user && (
                                        <span className="navbar-text text-light small">
                                            {user.email}
                                        </span>
                                    )}

                                    {user ? (
                                        <button
                                            className="btn btn-sm btn-outline-light"
                                            onClick={() => signOut(getAuth())}
                                        >
                                            Sign Out
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-sm btn-light"
                                            onClick={() => navigate('/login')}
                                        >
                                            Sign In
                                        </button>
                                    )}
                                </li>
                            </>
                        )}
                </div>

            </div>
        </nav >
    );
}