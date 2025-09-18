import React from "react"

export default function CardSpendingCategories({ categories }) {
    return (
        <div className="categories">
            <div className="categories-container">
                {categories.map((item, index) => (
                    <div key={index} className="category-card">
                        <p className="category-name">{item.category}</p>
                        <p className="category-spending">{item.spending} €</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
