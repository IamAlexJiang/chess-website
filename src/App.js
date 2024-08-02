// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Navigation from './components/navigation/navigation.bar';
// import Home from './routes/home/home';
// import Gallery from './routes/gallery/gallery';
// import ChessBoard from './routes/Board/board';
// import Authentication from './routes/authentication/authentication.component.jsx';

// import './App.css';

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path='gallery' element={<Gallery />} />
//         <Route path='board' element={<ChessBoard />} />
//         <Route path='auth' element={<Authentication />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;



import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.bar';
import Home from './routes/home/home';
import Gallery from './routes/gallery/gallery';
import Endgame from './routes/endgame/endgame';
import ChessBoard from './routes/Board/board';
import Authentication from './routes/authentication/authentication.component.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='endgame' element={<Endgame />} />
          <Route path='board' element={<ChessBoard />} />
          <Route path='auth' element={<Authentication />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

