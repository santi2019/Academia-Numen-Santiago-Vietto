import ShoppingCart from "@/components/shopping_cart/ShoppingCart";
import ShoppingCardContextProvider from "@/context/ShoppingCartContextProvider";



export default function Home() {

  return (
    <>
      <ShoppingCardContextProvider>
        <ShoppingCart/> 
      </ShoppingCardContextProvider>
    </>
  );
}


