import React, { Suspense, useContext, useState } from 'react';
import './ImageCard.css';
import { context } from '../context';
import { useNavigate } from 'react-router-dom';
import ImageCarosuel from './ImageCarosuel';

function ImageContainer() {

    const [currentImage,setCurrentImage] = useState();
    const contextData = useContext(context);
    const searchKey = contextData[0].topic;
    const navigate = useNavigate();

    const handleAccept = () => {
        contextData[0].selectedImage = currentImage;
        navigate('/profile');
    }

    const handleReject = () => {
        navigate('/');
    }

    return (
    <>
        <Suspense fallback={<div class="spinner primary"></div>}>
            <ImageCarosuel currentImage={currentImage} setCurrentImage={setCurrentImage} searchKey={searchKey} />
        </Suspense>
        <div className='row'>
            <div className='col-sm-6'>
                <button className="secondary small" style={{width:'60%',float:'right'}} onClick={handleReject}>Reject</button>
            </div>
            <div className='col-sm-6'>
                <button className="tertiary small" style={{width:'60%',float:'left'}} onClick={handleAccept}>Accept</button>
            </div>
        </div>
    </>
    );
}

export default ImageContainer;