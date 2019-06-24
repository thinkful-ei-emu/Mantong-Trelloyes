import React from 'react';
import './App.css';
import Card from './Card';
import List from './List';
import STORE from './store';


function App() {
  return (
    <div className="App">
    <Card card={STORE.allCards.j} />
    </div>
  );
  
  
}

export default App;
