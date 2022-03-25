import React from 'react';
import { FaSearch } from "react-icons/fa";
import Gif from '../gif';
import data from '../../constant.js';

function Search() {
    
    const data_filter_out_g = data.filter(gif => gif.rating !== 'g');
    const gif_loop = data_filter_out_g.map(gif => <Gif key={gif.id} title={gif.title} url={gif.url}/>); //using id
    const gif_loop2 = data_filter_out_g.map((gif, idx) => <Gif key={idx} title={gif.title} url={gif.url}/>); //using idx

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
            <div className='image'>{gif_loop2}</div>
            
        </>
    )
}

export default Search;