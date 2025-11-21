import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function logIn() {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: "340px" }}>
                <h3 className="text-center mb-3 fw-bold">Log In</h3>
                {error && (<div className="alert alert-danger py-2 small">{error}</div>)}
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        className="form-control"
                        placeholder='Your email address'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        className="form-control"
                        placeholder='Your password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={logIn}
                >
                    Log In
                </button>

                <p className="text-center small mb-0">
                    Don’t have an account?
                    <Link to="/create-account" className="ms-1">Create one here</Link>
                </p>
            </div>
        </div>
    );
}
