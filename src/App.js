import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accordion from './components/docs/docsComponents.js/Accordion';
import Button from './components/docs/docsComponents.js/Button';
import Cards from './components/docs/docsComponents.js/Cards';
// import Docs from './pages/Docs';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/docs' element={<Docs />} /> */}
        <Route exact path='/docs/accordion' element={<Accordion />} />
        <Route exact path='/docs/button' element={<Button />} />
        <Route exact path='/docs/cards' element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;
