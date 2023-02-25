import React from 'react';
import '../styles/Photo.scss'
const Photo = ({ photoSrc }) => {

    return (
        <div className='photo'>
            <img src={photoSrc} alt="" />
        </div>
    );
};

export { Photo };