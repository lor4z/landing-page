import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';

function App() {
  return (
    <div id="container">
      <Header />
      <Banner />
      <Services />
    </div>
  );
}

export default App;
