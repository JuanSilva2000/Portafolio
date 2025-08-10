import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import { ProjectItem } from './ProjectItem'
import '../../../css/Main/seccionts/Projects.css'

export const Projects = () => {

    const {selectedTheme} = useContext(AppContext)

    const projectsData = [
        {
            title: "Juego de Escape Room",
            description: "Juego web interactivo donde los usuarios resuelven desafíos para avanzar en diferentes niveles. El desarrollo se realizó en 3 sprints, gestionando las tareas con un kanban y aplicando prácticas de pruebas unitarias y comportamiento. Se utilizó el enfoque GitHub Flow y automatización con GitHub Actions.",
            technologies: ["HTML", "CSS", "JavaScript", "Node", "Express", "GitHub Action", "ScrumBand"],
            githubUrl: "https://github.com/JuanSilva2000/Escape-room"
        },
        {
            title: "Buscador de Recetas de Comida",
            description: "Plataforma para buscar recetas y obtener detalles como ingredientes y pasos de preparación. Incluye un asistente virtual que responde preguntas relacionadas con las recetas. El desarrollo se organizó utilizando GitHub Flow, dividiendo funcionalidades en ramas para su integración en la rama principal.",
            technologies: ["React", "CSS", "Node", "Express", "OpenAI API"],
            githubUrl: "https://github.com/JuanSilva2000/PAM"
        },
        {
            title: "Proyecto CRUD de Usuarios",
            description: "Desarrollé un CRUD de gestión de usuarios, permitiendo la creación, lectura, actualización y eliminación de registros con nombre, email y edad. Implementé una interfaz intuitiva con Vue.js, una API REST con Express y el manejo eficiente de la base de datos con Sequelize. Además, apliqué validaciones y buenas prácticas para garantizar la seguridad y estabilidad del sistema.",
            technologies: ["Vue", "CSS", "Vuetify", "Node", "Express", "Sequelize", "MySQL"],
            githubUrl: "https://github.com/JuanSilva2000/CRUD-USER"
        }
    ]

    return (
        <section className="project-wrap" 
            style={{'--scrollbar-color': selectedTheme.colors[2] }}
        >
            <h1
                className='title'
                style={{color: selectedTheme.colors[2]}}
            >|PROYECTOS</h1>

            {projectsData.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                />
            ))}
        </section>
    )
}
