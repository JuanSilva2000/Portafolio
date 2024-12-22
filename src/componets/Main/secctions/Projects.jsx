import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../../css/Main/seccionts/Projects.css'

export const Projects = () => {

    const {selectedTheme} = useContext(AppContext)

    return (
        <section className="project-wrap">
            <h1
                className='title'
                style={{color: selectedTheme.colors[2]}}
            >|PROYECTOS</h1>

            <span className='project-decription'>
                <h2 style={{color: selectedTheme.colors[2]}}    className='title-project'>● Juego de Escape Room <a style={{color: selectedTheme.colors[2]}}href="https://github.com/JuanSilva2000/Escape-room"><GitHubIcon/></a></h2>

                <p style={{color: selectedTheme.colors[1]}} className='content-project'>Juego web interactivo donde los usuarios resuelven desafíos para avanzar en diferentes niveles. El desarrollo se realizó en 3 sprints, gestionando las tareas con un kanban y aplicando prácticas de pruebas unitarias y comportamiento. Se utilizó el enfoque GitHub Flow y automatización con GitHub Actions. </p>

                <span className='tecnologies-projects'>
                    <p>HTML</p> 
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>GitHub Action</p>
                    <p>ScrumBand</p>
                </span>
            </span>

            <span className='project-decription'>
                <h2 style={{color: selectedTheme.colors[2]}} className='title-project'> ● Buscador de Recetas de Comida <a style={{color: selectedTheme.colors[2]}} href="https://github.com/JuanSilva2000/PAM"><GitHubIcon/></a></h2>

                <p style={{color: selectedTheme.colors[1]}} className='content-project'>Plataforma para buscar recetas y obtener detalles como ingredientes y pasos de preparación. Incluye un asistente virtual que responde preguntas relacionadas con las recetas. El desarrollo se organizó utilizando GitHub Flow, dividiendo funcionalidades en ramas para su integración en la rama principal.</p>

                <span className='tecnologies-projects'>
                    <p>React</p> 
                    <p>CSS</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>OpenAI API</p>
                </span>
            </span>
        </section>
    )
}
