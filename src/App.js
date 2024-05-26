// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Gallery from './routes/gallery/gallery';
import Navigation from './components/navigation.bar';
import ChessBoard from './routes/Board/board';
import SignIn from './routes/sign-in/sign-in.component.jsx';
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
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
