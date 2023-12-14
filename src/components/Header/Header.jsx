import React from 'react';
import './Header.css';
import { headerUtils } from '../../Data/data';

function Header() {
    return (
        <header>
            <a href='/' className='logo'> {headerUtils.logo} </a>

            {headerUtils.links.map(l => 
                <a href={l.link} className='button header-home-btn'> {l.name} </a>
            )}
        </header>
    );
}

export default Header;