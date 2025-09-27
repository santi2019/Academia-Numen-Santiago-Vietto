import { createContext, useState } from "react"

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState(false);

  const handleTheme = () => setTheme(!theme);
  
  /* 
  Si theme es true, ademas se aplica la clase dark, caso contrario no coloca nada, y asi evitamos colocar una clase light.
  theme ? "dark" : "light"
  */
  const toggleTheme = theme && "dark"; 

  const toggleThemeIcon = theme ? '☀️' : '🌙';

  /* 
  Cuando una propiedad de un objeto tiene como valor una variable con el mismo nombre, se lo puede simplificar.
  Como en este caso tenemos pocas variables podemos directamente pasar el contenido de la variable como parametro en value del Provider.
  No colocamos en el theme porque se usa en toggleTheme, ni el setTheme porque se usa en handleTheme.
  */
  const value = {
    toggleTheme,
    handleTheme,
    toggleThemeIcon
  }



  return (
    <ThemeContext.Provider value={value}>
        {props.children}
        {/*
        <Head/>
        <Main/>
        <Footer/>
        */}
    </ThemeContext.Provider>
  )
}
 
export default ThemeContextProvider
