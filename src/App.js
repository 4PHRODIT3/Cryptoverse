import React from 'react';
import "./index.css";
import { Navbar,Home,Cryptocurrencies,News,Exchanges,CryptoDetails,Footer } from './components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-container bg-main min-h-screen'>
      <div className='min-h-[84px]'>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='/cryptocurrency/:coinID' element={<CryptoDetails />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
      <div>
         <Footer />
      </div>
    </div>
  )
}

export default App