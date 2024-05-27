import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Gallery from './routes/gallery/gallery';
import Navigation from './components/navigation/navigation.bar.js';
import ChessBoard from './routes/Board/board';
import Authentication from './routes/authentication/authentication.component.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/board" element={<ChessBoard />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
