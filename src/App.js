import React from 'react';
import profileImage from './img/developer.PNG';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Prince</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
