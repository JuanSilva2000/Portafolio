import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import ComputerIcon from '@mui/icons-material/Computer';
import '../../../css/Main/seccionts/Education.css'

export const Education = () => {

  const {selectedTheme} = useContext(AppContext)

  return (
    <section className="education-wrap">
      <h1
        className='title-education'
        style={{color: selectedTheme.colors[2]}}
      >|EDUCACIÓN</h1>

      <span className='content-education'>
        <h3 style={{color: selectedTheme.colors[1]}}>Universidad Nacional de Ingeniería</h3>

        <p className='profession' style={{color: selectedTheme.colors[1]}}>Ciencia de la Computación <ComputerIcon/></p>

        <p className='time' style={{color: selectedTheme.colors[1]}}>2020-Actualidad (8vo ciclo)</p>
      </span>
  </section>
  )
}