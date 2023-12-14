import React, { Suspense } from 'react';
import './ImageCard.css';

function ImageCard(props) {

    const {imageUrl, altDescription} = props;

    return (
        <div className='row'>
        <Suspense fallback={<div> Loading... </div>}>
            <div className='card image-card'>
                <figure>
                    <img role='topic-image' className='image-block' key={imageUrl} src={imageUrl} alt={altDescription} />
                </figure>
            </div>
        </Suspense>
        </div>
    );
}

export default ImageCard;