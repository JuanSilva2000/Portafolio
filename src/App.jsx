import { useState} from 'react'
import { AppState } from './componets/context/AppState.jsx'
import './App.css'
import { Header } from './componets/Header'
import { Main } from './componets/Main.jsx'
import { Footer } from './componets/Footer.jsx'

function App() {

  return (
    <AppState>
      <div className='wrapper'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
      

    
    </AppState>
  )
}

export default App
