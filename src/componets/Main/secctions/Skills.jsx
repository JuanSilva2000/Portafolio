import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import '../../../css/Main/seccionts/Skills.css'

export const Skills = () => {

  const {selectedTheme} = useContext(AppContext)

  // Organización simplificada de tecnologías
  const skillsCategories = [
    {
      title: "Frontend",
      skills: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'TypeScript', 'React']
    },
    {
      title: "Fullstack Frameworks",
      skills: ['Next.js', 'Remix']
    },
    {
      title: "Backend",
      skills: ['Node', 'Express', 'Prisma', 'Sequelize', 'Supabase']
    },
    {
      title: "Competencias y herramientas",
      skills: ['Git', 'GitHub', 'Docker', 'Scrum', 'Kanban', 'Inglés (B1)']
    },
    // {
    //   title: "Idiomas",
    //   skills: ['Inglés (B1)']
    // }
  ]

    return (
        <section className="skills-container">
          <h2 className="skills-title" style={{color: selectedTheme.colors[2]}}>|CONOCIMIENTO</h2>
          
          <div className="skills-categories-grid">
            {skillsCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills-category-section">
                <h3 
                  className="category-title"
                  style={{color: selectedTheme.colors[2]}}
                >
                  {category.title}
                </h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-item"
                      style={{
                        backgroundColor: selectedTheme.colors[3],
                        color: selectedTheme.colors[1],
                        borderColor: selectedTheme.colors[2],
                        cursor: 'pointer'
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )
}
