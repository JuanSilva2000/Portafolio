import React from 'react'
import profile from '../../img/profile.jpeg'
import '../../css/Main/Introducction.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Introducction = ({selectedTheme}) => {
  console.log(selectedTheme)

  return (
    <div className='intro-container' style={{background: selectedTheme.colors[0]}}>
       <img 
          src={profile} 
          style={{
            border: `6px solid ${selectedTheme.colors[2]}`
          }} 
          alt="Profile" 
      />

      <div className="name">
        <h1 style={{color: selectedTheme.colors[1]}}>Hola,</h1>
        <h1 style={{color: selectedTheme.colors[1]}}>Soy <span style={{color: selectedTheme.colors[2]}}>Juan Silva</span></h1>
        <h1 style={{color: selectedTheme.colors[2]}}>Desarrollador Web Frontend</h1>
      </div>

      <div 
        style={{ 
          borderTop: `2px solid ${selectedTheme.colors[1]}`, 
          margin: "20px 0" 
        }}
      ></div>

      <p className="description" style={{color: selectedTheme.colors[1]}}>
        Estudiante de Ciencia de la Computación en la Universidad Nacional de Ingeniería (Lima, Perú), apasionado por el desarrollo web.
      </p>

      <div className="data" style={{color: selectedTheme.colors[2]}}>
        <span >
          CV
          <PictureAsPdfIcon/>
        </span>

        <span>
          GiHub
          <GitHubIcon/>
        </span>

        <span>
          Linked In
          <LinkedInIcon/>
        </span>
      </div>

    </div>
  )
}
