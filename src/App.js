import React from 'react';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/TodoFeatures';
// import logo from './logo.svg';
import AlbumFeature from './features/Album';
import RouteAndLink from './pages/RouteAndLink';

function App() {

  return (
    <div className='App'>
      <p><NavLink to='/todos'>Todo</NavLink></p>
      <p><NavLink to='/albums'>Album</NavLink></p>
      <Routes>
        

        <Route path="/" element={<div></div>} />
        <Route path="/todos" element={<TodoFeature/>}/>
        <Route path="/albums" element={<AlbumFeature/>}/>
      </Routes>
    </div>
  );
}

export default App;