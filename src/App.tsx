import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header'
// import Footer from './components/Footer'
import LoginCard from './components/LoginCard'
import HomePage from './components/HomePage'

function App() {
  return (
    <>    
    <BrowserRouter>
      <Header />     
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginCard />}/>
        </Routes>  
      <GlobalStyles />
    </BrowserRouter>  
    </>
  );
}

export default App;
