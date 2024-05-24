import React, { useState } from 'react';
import { mainline } from '../../components/data.mainlines';
import SortBlock from '../../components/sortblock';
import './gallery.css';

const Gallery = () => {
  const [sortBy, setSortBy] = useState('name'); 

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedMainlines = [...mainline].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'usage':
        return b.Rating.Usage - a.Rating.Usage;
      case 'difficulty':
        return a.Rating.Difficulty - b.Rating.Difficulty;
      default:
        return 0;
    }
  });

  const groupedMainlines = sortedMainlines.reduce((acc, mainline) => {
    const { category } = mainline;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(mainline);
    return acc;
  }, {});

  // Order the categories manually
  const orderedCategories = ['King\'s Pawn', 'Queen\'s Pawn','Other'];

  return (
    <div>
      <h1 className='gallery-title'>Chess Openings</h1>
      <div className="sort-block-container">
        <SortBlock sortBy={sortBy} handleSortChange={handleSortChange} />
      </div>
      {orderedCategories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <ul className="openings-list">
            {groupedMainlines[category].map((mainline) => (
              <li key={mainline.id} className="opening-item">
                <h3>{mainline.title}</h3>
                <img
                  src={process.env.PUBLIC_URL + '/images/kings.pawn/' + mainline.cover}
                  alt={mainline.title}
                />
                <p>{mainline.description}</p>
                <div className="ratings">
                  <span className="rating-bubble">Usage: {mainline.Rating.Usage}</span>
                  <span className="rating-bubble">Difficulty: {mainline.Rating.Difficulty}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="next-page-button">Next Page</button>
    </div>
  );
};

export default Gallery;
