import React from 'react';
import Logout from '@/features/auth/pages/Logout'

interface NavbarProps {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">Filebusters</div>
            <div className="text-lg flex gap-12 items-center">
                <div className='flex gap-3 items-center'>
                    <i className='pi pi-user'></i>
                    <span>{name}</span>
                </div>
                <button className="text-lg flex gap-3 items-center"><i className='pi pi-sign-out'></i> Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
