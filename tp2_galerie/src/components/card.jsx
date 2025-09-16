import React from 'react'

/*
    -> Card function:
        Receive data from data.js and use it to return a card with all informations 
*/


export default function
    Card({ url, title, categories, author }) {
    return (
        <div className='card'>
            <div className='card-image-wrapper'>
                <img className='card-image' src={url} alt="" />
            </div>
            <h2 className='card-title'>{title}</h2>
            <p className='card-author'>{author}</p>
            <div className='card-categories'>
                {categories.map((category, index) => (
                    <span key={index} className='card-category'>
                        {category}
                    </span>
                ))}
            </div>
        </div>
    )
}