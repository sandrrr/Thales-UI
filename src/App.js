import React from 'react';
import Header from './components/Header'
import Homepage from './pages/Homepage'
import './App.css';

function App() {
  return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <Header />
        <Homepage />
      </div>
  );
}

export default App;
