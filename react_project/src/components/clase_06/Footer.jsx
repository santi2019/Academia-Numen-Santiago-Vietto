import React, {useContext} from 'react'
import {ThemeContext} from '@/context/ThemeContextProvider'

const Footer = () => {

  const {toggleTheme} = useContext(ThemeContext);

  return (
    <>
        <footer className={toggleTheme}>
            <h1>Footer</h1>
        </footer>


        <style jsx>{`
            footer{
                height: 50vh;
            }    
        `}</style> 
    </>
  )
}

export default Footer
