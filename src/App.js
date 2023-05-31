import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' Component={Services}/>
        <Route path='/products' Component={Products}/>
        <Route path='/sign-up' Component={SignUp}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
