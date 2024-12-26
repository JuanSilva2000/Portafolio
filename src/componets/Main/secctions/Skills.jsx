import React,{useContext} from 'react'
import AppContext from '../../context/AppContext'
import '../../../css/Main/seccionts/Skills.css'

export const Skills = () => {

  const {selectedTheme} = useContext(AppContext)

    return (
        <section className="skills-container">
          <h2 className="skills-title" style={{color: selectedTheme.colors[2]}}>|CONOCIMIENTO</h2>
          
          <div className="skills-content">
            <div className="skills-category">
              <h3 className='title-subsection' style={{color: selectedTheme.colors[2]}}>Frontend</h3>
              <p style={{color: selectedTheme.colors[1]}}>HTML, CSS, JavaScript, React</p>
            </div>

            <div className="skills-category">
              <h3 className='title-subsection' style={{color: selectedTheme.colors[2]}}>Backend</h3>
              <p style={{color: selectedTheme.colors[1]}}>Node.js, Express</p>
            </div>

            <div className="skills-category">
              <h3 className='title-subsection' style={{color: selectedTheme.colors[2]}}>Herramientas</h3>
              <p style={{color: selectedTheme.colors[1]}}>Git, GitHub, Docker</p>
            </div>

            <div className="skills-category">
              <h3 className='title-subsection' style={{color: selectedTheme.colors[2]}}>Metodologías</h3>
              <p style={{color: selectedTheme.colors[1]}}>Ágiles (Scrum), DevOps</p>
            </div>

            <div className="skills-category">
              <h3 className='title-subsection' style={{color: selectedTheme.colors[2]}}>Idiomas</h3>
              <p style={{color: selectedTheme.colors[1]}}>Inglés (B1), Español (Nativo)</p>
            </div>

          </div>
        </section>
      )
}
