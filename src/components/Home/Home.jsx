import React from 'react';
import './Home.css'
import UserRequestForm from '../UserRequest/UserRequestForm';
import { homeTexts } from '../../Data/data';

function Home() {
    return (
        <div className='form-container'> 
            <div className='row'>
                <div className='col-sm-6'></div>
                <div className='col-sm-6'>
                    <small className='app-heading'>
                        {homeTexts.cardheading}
                    </small>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <span className='hooray-text'> {homeTexts.main} </span>
                    <span title='welcome-text' className='welcome-text'> {homeTexts.secondary} </span>
                    <span title='additional-text' className='additional-text'> {homeTexts.paraText} </span>
                </div>
                <div className='col-sm-6'>
                    <UserRequestForm />
                </div>
            </div>
        </div>
    );
}

export default Home;