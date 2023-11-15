import React from "react";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-gray-600'>
            <h1 className='w-full text-3xl font-bold text-[#6495ED]'>Contacts.</h1>
            <ul className='flex'>
                <a href={'/'} className='p-4'>Home</a>
                <a href={'about'} className='p-4'>About</a>
            </ul>
        </div>
    );
}

export default Navbar;
