import React from 'react';

interface NavbarProps {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">Filebusters</div>
            <div className="text-lg flex gap-3 items-center"><i className='pi pi-user'></i> {name}</div>
        </nav>
    );
};

export default Navbar;
