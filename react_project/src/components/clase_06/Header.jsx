import React, {useContext} from 'react'
import {ThemeContext} from '@/context/ThemeContextProvider'

const Header = () => {
  const {toggleTheme, handleTheme, toggleThemeIcon} = useContext(ThemeContext);

  return (
    <>
      <nav className={toggleTheme}>
            <button onClick={handleTheme}>{toggleThemeIcon}</button>
      </nav>

      <style jsx>{`
        button{
          border: none;
          background-color: transparent;
          font-size: 2rem;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Header
