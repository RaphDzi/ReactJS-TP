import React from 'react'

export default function
    Filter({ categories, selectedCategories, onCategoryClick }) {
    return (
        <div className='filter'>
            {categories.map((category, index) => (
                <button key={index} className={`filter-category ${selectedCategories.includes(category) ? "active" : ""}`} onClick={() => onCategoryClick(category)}>
                    {category}
                </ button>
            ))}
        </div>
    )
}