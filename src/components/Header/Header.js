import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {

    return (
        <nav className='header'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;