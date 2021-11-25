import React from 'react';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Process from './components/Process';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Process />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
