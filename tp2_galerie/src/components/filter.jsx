import React from 'react'

/*
    -> Filtering bar : 
        Allows users to filter by categories to show cards with similar category 
        User can set one or many categories.
*/

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