import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import BaseRouter from './routes'
import './App.css';

function App() {
  return (
    

    
    <BrowserRouter>

        <Navbar/>
        <BaseRouter/>

        <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
