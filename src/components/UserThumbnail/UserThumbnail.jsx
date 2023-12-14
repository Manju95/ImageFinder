import React, { useContext } from 'react';
import { context } from '../context';
import './UserThumbnail.css'

function UserThumbnail(props) {

    const contextData = useContext(context);
    const {userData,selectedImage} = contextData[0];

    return (
        <div className='profile-container'>
            <div className='row'>
                <span className='profile-header'>Your profile looks amazing</span>
            </div>
            <div className='row'>
                <div className='card profile-card'>
                    <div className='row'>
                        <a target="_blank" rel="noreferrer" className='thumbnail-image-link' href={selectedImage.urls.raw}>
                            <img className='thumbnail-image' src={selectedImage.urls.thumb} alt={selectedImage.slug} />
                        </a>
                    </div>
                    <div className='row'>
                        <span className='username'>{userData.firstname+' '+userData.surname}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserThumbnail;