import { useState, useEffect } from 'react';

import './App.css';
import OpeningList from './components/openingList/openingList';
import SearchBox from'./components/searchbox/searchbox'


const App = () => {
  const [searchField, setSearchField] = useState(''); 
  const [mainlines, setMainlines] = useState([]);
  const [filteredMainlines, setFilterMainlines] = useState(mainlines);

  useEffect(() => {
    fetch('')
    .then((response) => response.json())
    .then((users) => setMainlines(users));
  }, []);

useEffect(() => {
  const newFilteredMainlines = mainlines.filter((mainlines) => {
    return mainlines.name.toLocaleLowerCase().includes(searchField);
  });
  
  setFilterMainlines(newFilteredMainlines);
}, [mainlines, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <div className='App'>
      <h1 className='app-title'>Gallery</h1>
    
      <SearchBox
        className='mainline-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search mainlines'
      />
      <OpeningList mainlines={filteredMainlines} />
    </div>

  )
}


export default App;

