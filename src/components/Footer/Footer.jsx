import React from 'react';
import './Footer.css';
import { footerTexts } from '../../Data/data';

function Footer() {
    return (
        <footer className='sticky' role='footer'>
           <span> &#169; {footerTexts.main} </span>
        </footer>
    );
}

export default Footer;