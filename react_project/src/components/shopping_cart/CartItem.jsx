import React from 'react'

const CartItem = (item) => {

  const {id, name, price} = item;

  return (
    <div className="cart-item">
        <h4>{name}</h4>
        <h5>$ {price}</h5>
        <button>ELiminar uno</button>
        <button>Eliminar todos</button>
    </div>
  )
}

export default CartItem
