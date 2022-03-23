import React from 'react';
import { FaSearch } from "react-icons/fa";

function Index() {
    return (
        <>
            <h1 className='title'>Search Gif<span>.</span></h1>
            <div className='input'>
                <input
                    placeholder='Cari gambar kesukaanmu'
                    type='text'
                    className="search-input"
                    onFocus={(e) => {e.placeholder=''}}
                    onBlur={(e) => {e.placeholder='Cara gambar kesukaanmu'}}
                >
                </input>
                <button
                    value='Search'
                    type='submit'
                    className="search-button"
                >
                    <FaSearch />
                </button>
            </div>
            <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" className='img' alt="From Giphy">
                
            </img>
        </>
    );
}

export default Index;
