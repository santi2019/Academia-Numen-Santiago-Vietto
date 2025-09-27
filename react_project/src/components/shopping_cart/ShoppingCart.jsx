import React, { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider'
import Product from './Product';
import CartItem from './CartItem';


const ShoppingCart = () => {

  const {state, addToCart, deleteFromCart, clearCart,} = useContext(ShoppingCartContext);

  // state es un objeto que dentro tiene productos y un carrito.
  const {products, cart} = state

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
          products.map(product => <Product product={product}/>)
        }
      </div>      
      <h3>Carrito</h3>
      <div className="box">
        {
          cart.map(item => <CartItem item={item}/>)
        }
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  )
}

export default ShoppingCart
