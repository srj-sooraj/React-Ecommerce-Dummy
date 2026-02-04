import React, { useEffect, lazy, Suspense } from 'react'
import { fetchProducts } from '../../productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

import './Body.css'
const LoadNavbar = lazy(() => new Promise((resolve) => {
setTimeout(() => {
  resolve(import('../Navbar/Navbar.jsx'))
} , 3000)
}
)
)
function Body() {
 const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
  }

const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>

        <main className="container">
            <section className="hero">
                <h1>Discover Premium Products</h1>
                <p>Curated collections with modern design & quality</p>
            </section>
                <div className="product-grid">
                      {products.map(product => (
                        <div className="product-card" key={product.id}>
                          <img src={product.thumbnail} alt={product.title} />
                          <h3>{product.title}</h3>
                          <p>{product.description}</p>

                          <div className="price-row">
                            <span className="price">${product.price}</span>
                            <Link to={`/products/${product.id}`}>
                              <button className="btn">View</button>
                            </Link>
                          </div>
                        </div>
                      ))}
                </div>
        </main>

    </div>
  )
}

export default Body