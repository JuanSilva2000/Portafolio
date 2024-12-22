import React,{useContext} from 'react'
import AppContext from './context/AppContext'
import '../css/Footer.css'

export const Footer = () => {

    const {selectedTheme} = useContext(AppContext)

  return (
    <footer 
        style={{background: selectedTheme.colors[0] , color: selectedTheme.colors[1]}}
    >
        Portfolio made with react and inspired by Phuykong Meng. <a href="https://mphuykong.dev/">Link</a>
        
    </footer>
  )
}
