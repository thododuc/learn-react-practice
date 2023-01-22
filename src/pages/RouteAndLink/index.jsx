import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactPage from '../Contact';
import HomePage from '../Home';
import NewsPage from '../News';
import NotFound from '../NotFound';
// import logo from './logo.svg';

function RouteAndLink() {

  return (
    <div className='RouteAndLink'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        
      <Route path='*' element={<NotFound/>} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default RouteAndLink;