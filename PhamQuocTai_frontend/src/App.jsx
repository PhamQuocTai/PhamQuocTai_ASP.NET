import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './components/Login'
import ProductList from './components/ProductList'

function App() {

  return (
    <Router>
      <div className='bg-black pb-10'>
        <Header />
        <Banner />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/" element={< Home/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
   
  )
}

export default App
