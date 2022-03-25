import React from 'react';

function Gif({title, url}) {
    return (
        <>
            <div className='img-container'>
                <h1 className="title-img">{title}</h1>
                <img src={url} className='img' alt="From Giphy"></img>
            </div>
        </>
    )
}

export default Gif;