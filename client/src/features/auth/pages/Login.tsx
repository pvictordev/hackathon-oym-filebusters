import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from './authSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { RootState } from './store';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // const { loading, error } = useSelector((state: RootState) => state.auth);

    // const handleLogin = () => {
    //     dispatch(logIn({ email, password }));
    // };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
            </button> */}

            {/* {error && <p>{error}</p>} */}
        </div>
    );
};

export default Login;
