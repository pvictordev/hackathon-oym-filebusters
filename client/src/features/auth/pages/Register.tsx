import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../authSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase'
import { RootState } from '@/store/store';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    // const handleRegister = () => {
    //     dispatch(register({ email, password }));
    // };

    return (
        <div>
            <h2>Register Up</h2>
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
            {/* <button onClick={handleRegister} disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
            </button> */}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Register;
