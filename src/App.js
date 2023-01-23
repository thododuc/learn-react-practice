import React from 'react';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/TodoFeature';
// import logo from './logo.svg';

function App() {

  return (
    <div className='App'>
      <p><NavLink to='/todo-feature'>Todo</NavLink></p>
      <Routes>
        
        <Route path="/todo-feature" element={<TodoFeature/>}/>

      </Routes>
    </div>
  );
}

export default App;