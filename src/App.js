import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [view, setView] = useState('inventory');

  const handleInventoryClick = () => setView('inventory');
  const handleCustomerClick = () => setView('customer');

  return (
    <div className="App">
      <Header onInventoryClick={handleInventoryClick} onCustomerClick={handleCustomerClick}/>
      <Content view={view} />
    </div>
  );
}

export default App;