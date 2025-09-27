import React, {useContext} from 'react'
import {ThemeContext} from '@/context/ThemeContextProvider'

const Main = () => {

  const {toggleTheme} = useContext(ThemeContext);
  
  return (
    <>
      <main className={toggleTheme}>
        <h1>Main</h1>
      </main>



        <style jsx>{`
            main{
                height: 100vh;
            }    
        `}</style>
    </>
  )
}

export default Main

