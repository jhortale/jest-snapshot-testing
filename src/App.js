import React from 'react';
import './App.css';
import Items from './components/Items'

function App() {
  const items = [
    'Shark',
    'Dolphin',
    'Octopus'
  ];
  return (
    <Items items={items} />
  );
}

export default App;
