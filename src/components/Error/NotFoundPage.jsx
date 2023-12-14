import React from 'react';
import './NotFoundPage.css'
import { useNavigate } from 'react-router-dom';
import { notFoundTexts } from '../../Data/data';

function NotFoundPage() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='row notfound-container'>
                <div className='row'><span className='oops-msg'>{notFoundTexts.main}</span></div>
                <div className='row'><h1 className='notfound-msg'>{notFoundTexts.secondary}</h1></div>
                <div className='row'><span className='notfound'>{notFoundTexts.code}</span></div>
            </div>
            <div className='row'>
                <button className='small back-home-btn' onClick={handleNavigate}>Back to home</button>
            </div>
        </div>
    );
}

export default NotFoundPage;