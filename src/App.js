import { useState, useEffect } from 'react';
import OpeningList from './components/openingList/mainline.list';
import SearchBox from './components/searchbox/mainline.searchbox';
import { getMainlines } from './data/mainlines'; 

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [mainlines, setMainlines] = useState([]);
  const [filteredMainlines, setFilteredMainlines] = useState([]);

  useEffect(() => {
    // Call getMainlines function to fetch data
    const mainlinesData = getMainlines();
    setMainlines(mainlinesData);
    setFilteredMainlines(mainlinesData); // Set filteredMainlines initially to the same data
  }, []);

  useEffect(() => {
    const newFilteredMainlines = mainlines.filter(mainline => {
      return mainline.title.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMainlines(newFilteredMainlines);
  }, [mainlines, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Gallery</h1>
      <SearchBox
        className='mainline-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search mainlines'
      />
      <openingList mainlines={filteredMainlines} />
    </div>
  );
};

export default App;

// import { useState, useEffect } from 'react';

// import OpeningList from './components/openingList/openingList'
// import SearchBox from'./components/searchbox/searchbox'
// import './App.css';

// const App = () => {
//   const [searchField, setSearchField] = useState(''); 
//   const [mainlines, setMainlines] = useState([]);
//   const [filteredMainlines, setFilterMainlines] = useState(mainlines);

//   useEffect(() => {
//     fetch('')
//     .then((response) => response.json())
//     .then((users) => setMainlines(users));
//   }, []);

// useEffect(() => {
//   const newFilteredMainlines = mainlines.filter((mainlines) => {
//     return mainlines.name.toLocaleLowerCase().includes(searchField);
//   });
  
//   setFilterMainlines(newFilteredMainlines);
// }, [mainlines, searchField]);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   return(
//     <div className='App'>
//       <h1 className='app-title'>Gallery</h1>
    
//       <SearchBox
//         className='mainline-search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search mainlines'
//       />
//       <OpeningList mainlines={filteredMainlines} />
//     </div>

//   )
// }


// export default App;

