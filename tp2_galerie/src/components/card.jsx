import React from 'react'

export default function
    Card({ url, title, categories, author }) {
    return (
        <div className='card'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-author'>{author}</p>
            <div className='card-image-wrapper'>
                <img className='card-image' src={url} alt="" />
            </div>
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