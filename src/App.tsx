import React from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Greeting from './Greeting/Greeting';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
