
import React, { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import Body from './components/Body/Body'
// import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/Product/ProductDetail'
import Loading from './components/Loading/Loading'
const LoadNavbar = lazy(() => new Promise((resolve) => {
setTimeout(() => {
  resolve(import('./components/Navbar/Navbar.jsx'))
} , 3000)
}))
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <LoadNavbar />
      </Suspense>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>   
      <Footer />
    </BrowserRouter>
  )
}

export default App