import React, { useState } from 'react';
import './App.css'
import { CATEGORIES, IMAGES } from './data.js';
import Card from "./components/card.jsx";
import Filter from './components/filter.jsx';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]); //image(s) and category(ies) selected

  const handleCategoryClick = (category) => {
    if (category === "toutes") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

  // filtering images
  const filteredImages = selectedCategories.length === 0 ? IMAGES : IMAGES.filter((image) => image.categories.some((category) => selectedCategories.includes(category)));


  
  return (
    <>
      <h1>Galerie d'images</h1>
      <div>
        <Filter
          categories={CATEGORIES}
          selectedCategories={selectedCategories}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <main className="main">
        {filteredImages.map((image) => (
          <Card
            key={image.id}
            url={image.url}
            title={image.title}
            categories={image.categories}
            author={image.author}
          />
        ))}
      </main>
    </>
  )
}

export default App