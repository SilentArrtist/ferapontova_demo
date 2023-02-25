import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css'
import { Photo } from '../../../features/Photo'
import '../styles/Album.scss'
const Album = () => {
    const [images, setImages] = useState([]);
    const getData = () => {
        fetch('images/images.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setImages(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    const breakpointObj = {
        default: 3,
        1200: 3,
        992: 2,
        600: 1,
    }

    return (

        <Masonry className='masonry_wrapper' breakpointCols={breakpointObj}>
            {images.map((image, index) => (
                <Photo key={index} photoSrc={`/images/${image.name}`} />
            ))}
        </Masonry>

    );
};

export { Album };