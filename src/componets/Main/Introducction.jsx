import React from 'react'
// import profile from '../../img/profile.jpeg'
import profile from '../../img/perfil-5.jpeg'
import '../../css/Main/Introducction.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Introducction = ({selectedTheme}) => {

  return (
    <div className='intro-container' style={{background: selectedTheme.colors[0]}}>
       <img 
          src={profile} 
          style={{
            border: `6px solid ${selectedTheme.colors[2]}`
          }} 
          alt="Profile" 
      />

      <div className="name" style={{'--colorTyping': selectedTheme.colors[2]}}>
        <h1 style={{color: selectedTheme.colors[1]}}>Hola,</h1>

        <h1 style={{color: selectedTheme.colors[1]}} >Soy <span style={{color: selectedTheme.colors[2]}}>Juan Silva</span></h1>

        <h1 style={{color: selectedTheme.colors[2]}} className='typing'>Desarrollador Web</h1>
        
      </div>

      <div className='line'
        style={{ 
          borderTop: `2px solid ${selectedTheme.colors[1]}`, 
          margin: "20px 0" 
        }}
      ></div>

      <p className="description" style={{color: selectedTheme.colors[1]}}>
        Estudiante de Ciencia de la Computación en la Universidad Nacional de Ingeniería, con interés en el Desarrollo web y miembro activo del grupo estudiantil <a href='https://acecom.dev/' style={{color: selectedTheme.colors[2], textDecoration: 'none', fontWeight: 'bold'}}>ACECOM</a> (Asociación Científica Especializada en Computación) de la Facultad de Ciencias, donde he participado en proyectos que me han permitido fortalecer mis habilidades técnicas y de trabajo en equipo. Me considero una persona autodidacta, siempre en búsqueda de nuevos conocimientos y tecnologías que me permitan crecer profesionalmente y aportar valor en cada proyecto.
      </p>

      <div className="data" style={{color: selectedTheme.colors[2], '--colorover': selectedTheme.colors[1]}}>
        <a
           href="/pdf/CV-SILVA ROJAS.pdf" 
          download="CV-Juan-Silva.pdf" 
        >
          CV
          <PictureAsPdfIcon/>
        </a>

        <a
          href='https://github.com/JuanSilva2000'
          target="_blank" 
        >
          GitHub
          <GitHubIcon/>
        </a>

        <a
          href='https://www.linkedin.com/in/juansilva2000/'
          target="_blank" 
        >
          Linked In
          <LinkedInIcon/>
        </a>
      </div>

    </div>
  )
}
