import { createContext, useReducer } from "react"
import { shoppingInitialState } from "@/shopping_cart_reducer/shoppingCartInitialState";
import { shoppingReducer } from "@/shopping_cart_reducer/shoppingCartReducer";

export const ShoppingCartContext = createContext();

const ShoppingCardContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const addToCart = () => dispatch();

  const deleteFromCart = () => dispatch();

  const clearCart = () => dispatch();

  const values = {
    state,
    addToCart,
    deleteFromCart,
    clearCart,
  }

  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCardContextProvider
