import React from 'react';
import { FaSearch } from "react-icons/fa";
import Gif from '../gif';

function Search() {
    const gif = {
        id: '4HrBfVJJveBNS9ytSk',
        title: 'Nintendo Plotting GIF by Gaming GIFs',
        uploadedDate: '2018-04-03 15:21:50',
        url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
        webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
    }
    
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
            <Gif title={gif.title} url={gif.url}/>
        </>
    )
}

export default Search;