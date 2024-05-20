import React, { useState } from 'react';
import { getMainlines } from './components/data.mainlines';
import SortBlock from './components/sortblock'; 
import './App.css'; 

const App = () => {
  const mainlines = getMainlines();
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedMainlines = [...mainlines].sort((a, b) => {
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

  return (
    <div className="App">
      <h1>Chess Openings</h1>
      <div className="sort-block-container">
        <SortBlock sortBy={sortBy} handleSortChange={handleSortChange} />
      </div>
      {Object.keys(groupedMainlines).map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <ul className="openings-list">
            {groupedMainlines[category].map((mainline) => (
              <li key={mainline.id} className="opening-item">
                <h3>{mainline.title}</h3>
                <img
                  src={process.env.PUBLIC_URL + '/images/openings/' + mainline.cover}
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

export default App;
