import {useContext} from 'react'
import AppContext from './context/AppContext'
import {Introducction} from './Main/Introducction'
import {Information} from './Main/Information'
import '../css/Main.css'

export const Main = () => {

  const {selectedTheme} = useContext(AppContext)

  

  return (
    <div className='main-container' style={{background: selectedTheme.colors[0]}}>
        <Introducction
          selectedTheme={selectedTheme}
        />
        <Information/>
    </div>
  )
}
