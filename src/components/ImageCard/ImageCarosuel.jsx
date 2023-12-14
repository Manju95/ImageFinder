import React, { useContext, useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { getImages } from '../../api';
import { context } from '../context';
import { apiErrorTexts, errorTexts } from '../../Data/data';

function ImageCarosuel(props) {

    const {searchKey,currentImage,setCurrentImage} = props;
    const contextData = useContext(context);
    const [images,setImages] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [apiResponse,setApiResponse] = useState();
    const [error,setError] = useState({isError:false,message:''});
    const NETWORKERRORCODE = 'ERR_NETWORK';
    const collectionEndpoint = '/search/photos';

    useEffect(() => {
        getPhotos(searchKey,currentPage);
    },[])

    const getPhotos = (searchKey,currentPage) => {
        if(currentPage === 1 || currentPage <= apiResponse.total_pages)
        {
            getImages(collectionEndpoint,searchKey,currentPage).then(res => {
                if(res.responseData !== undefined && res.statusCode === 200){
                    setApiResponse(res.responseData);
                    setImages(res.responseData.results);
                    setCurrentImage(res.responseData.results[0]);
                }
                else{
                    setError({isError:true,message:res.statusMessage});
                }
                
            }).catch(err => {
                    if(err.code === NETWORKERRORCODE)
                    {
                        setError({isError:true,message:errorTexts.networkError})
                    }
                });
        }
        else{
            setError({isError:true,message:apiErrorTexts.collectionErrorText})
        }
    }

    const handleNext = () => {
        let currentIndex = images.findIndex(image => image.id === currentImage.id);
        if(currentIndex !== undefined && currentIndex >= 0)
        {
            let nextImage = images.at(currentIndex+1);
            if(nextImage !== undefined)
            {
                setCurrentImage(nextImage);
                contextData[0].selectedImage = nextImage;
            }
            else{
                setCurrentPage(currentPage+1);
                getPhotos(searchKey,currentPage+1);
            }            
        }
        else{
            setCurrentPage(currentPage+1);
            getPhotos(searchKey,currentPage+1);
        }
    }

    const handlePrevious = () => {
        let currentIndex = images.findIndex(image => image.id === currentImage.id);
        if(currentIndex !== undefined && currentIndex >= 0)
        {
            let previousImage = images.at(currentIndex-1);
            if(previousImage !== undefined)
            {
                contextData[0].selectedImage = previousImage;
                setCurrentImage(previousImage);
            }            
        }
    }

    return (
        <>
        {
            error.isError && <span className='toast' >{error.message}</span>
        }
        <div className='row'>
            <div className='col-sm-1 previous-btn-col'>
                <button className='image-navigation-btns' onClick={handlePrevious}>&lt;</button>
            </div>
            <div className='col-sm-10'>
                {currentImage !== undefined ?
                    <ImageCard imageUrl={currentImage.urls.raw} altDescription={currentImage.alt_description} />
                    :
                    <ImageCard imageUrl='#' alt='Preview not available' />
                }
            </div>
            <div className='col-sm-1 next-btn-col'>
                <button className='image-navigation-btns' onClick={handleNext}>&gt;</button>
            </div>
        </div>
        </>
    );
}

export default ImageCarosuel;