import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function CreateAccountPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function createAccount() {
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: "340px" }}>
                <h3 className="text-center mb-3 fw-bold">Create Account</h3>
                {error && (<div className="alert alert-danger py-2 small">{error}</div>)}

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        className="form-control"
                        placeholder='Enter your email address'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        className="form-control"
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className="form-control"
                        type='password'
                        placeholder='Re-enter your password'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)} />
                </div>

                <button className="btn btn-primary w-100 mb-3" onClick={createAccount}>
                    Create Account
                </button>

                <p className="text-center small mb-0">
                    Already have an account?
                    <Link to="/login" className="ms-1">Log In</Link>
                </p>

            </div>
        </div>
    )
}