import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../authSlice';
import { RootState, AppDispatch } from '@/store/store';

const Register: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(register({ email, password }));
    };

    return (
        <div style={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleRegister} style={styles.form}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={styles.input}
                    required
                />
                <button type="submit" disabled={loading} style={styles.button}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
                {error && <p style={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

// Inline styles for simplicity
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '300px',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginTop: '10px',
    },
};

export default Register;
