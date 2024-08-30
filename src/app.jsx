import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Choice from './components/Choice';

function App() {
  return (
    <div id="container">
      <Header />
      <Banner />
      <Services />
      <Choice/>
    </div>
  );
}

export default App;
