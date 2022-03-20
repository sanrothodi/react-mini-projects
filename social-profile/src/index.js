import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Info from './Info';
import About from './About';
import Interest from './Interest'
import Footer from './Footer';


const FullProfile = () => {
  return (
    <>
      <Info />
      <About />
      <Interest />
      <Footer />
    </>
  )
};

ReactDOM.render(<FullProfile />, document.getElementById('root'))



