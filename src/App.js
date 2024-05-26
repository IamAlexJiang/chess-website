import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Gallery from './routes/gallery/gallery';
import Navigation from './components/navigation.bar.js';
import ChessBoard from './routes/Board/board.js'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/board" element={<ChessBoard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
