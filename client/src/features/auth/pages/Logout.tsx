import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../authSlice';

const SignOut = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(logout());
    };

    return (
        <button onClick={handleSignOut} className="text-lg flex gap-3 items-center"><i className='pi pi-sign-out'></i> Logout</button>
    );
};

export default SignOut;