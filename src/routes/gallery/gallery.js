import { useState, useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context.jsx';
import SortBlock from './sortblock'; 
import { sortMainlines } from './sortblock'; // Correct import
import MainlineCard from '../../components/mainline-card/mainline-card.components';
import './gallery.scss';

const Gallery = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (value) => {
    setSortBy(value.toLowerCase());
  };

  return (
    <Fragment>
      <h1 className='gallery-title'>Chess Openings</h1>
      <div className="sort-block-container">
        <SortBlock handleSortChange={handleSortChange} />
      </div>
      
      {Object.keys(categoriesMap).map(title => {
        const sortedMainlines = sortMainlines(categoriesMap[title], sortBy);
        return (
          <Fragment key={title}>
            <div className="category-section">
              <h2 className="category-title">{title}</h2>
              <div className='mainlines-container'>
                {sortedMainlines.map((mainline) => (
                  <MainlineCard key={mainline.id} mainline={mainline} />
                ))}
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Gallery;
