import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/TodoFeatures';
// import logo from './logo.svg';

function App() {

  return (
    <div className='App'>
      <TodoFeature />
      <AlbumFeature/>

    </div>
  );
}

export default App;