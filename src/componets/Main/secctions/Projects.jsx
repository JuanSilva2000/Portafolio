import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { ProjectItem } from './ProjectItem'
import '../../../css/Main/seccionts/Projects.css'

export const Projects = () => {

    const { selectedTheme } = useContext(AppContext)

    const projectsData = [
        {
            title: "Curriculum Builder",
            description: "Aplicación web para crear currículums vitae profesionales en estilo Harvard. Los usuarios ingresan detalles personales, educación, experiencia laboral, habilidades técnicas y proyectos a través de una interfaz estructurada. Incluye vista previa en tiempo real del documento y genera un PDF de alta calidad listo para descargar. Diseñada con un enfoque limpio y académico.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "React-PDF"],
            githubUrl: "https://github.com/JuanSilva2000/Curriculum-Vitae-Builder",
            webUrl: "https://build-your-cv-web-screen.netlify.app/"
        },
        {
            title: "Kanban App",
            description: "Desarrollé una aplicación web para la gestión de proyectos que utilizan el enfoque Kanban, permitiendo a los usuarios crear, asignar, organizar y priorizar tareas de manera eficiente, incluye servicio de autenticación por roles y gestión de perfiles, además posee interfaz intuitiva y responsiva.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Material-UI"],
            githubUrl: "https://github.com/JuanSilva2000/Kanban-App",
        },
        {
            title: "Acecom Web site",
            description: "Proyecto del sitio web de ACECOM, me integré al equipo existente para aportar mejoras significativas. Corregí problemas de layout shift en las interfaces de Login, Register y Contact Us; implementé un botón de cambio de idioma (language switcher) utilizando i18next para alternar entre inglés y español; desarrollé la vista “Áreas”, que presenta información sobre los subgrupos de Desarrollo Web, Inteligencia Artificial y Seguridad Informática, incluyendo sus objetivos e integrantes; e incorporé la funcionalidad de exportar a Excel, mediante ExcelJS, la lista de integrantes filtrada por estado o por área.",
            technologies: ["Remix", "TypeScript", "Styled Components", "i18next", "Material-UI", "xlsx"],
            webUrl: "https://acecom.dev/"
        },
        // {
        //     title: "Juego de Escape Room",
        //     description: "Juego web interactivo donde los usuarios resuelven desafíos para avanzar en diferentes niveles. El desarrollo se realizó en 3 sprints, gestionando las tareas con un kanban y aplicando prácticas de pruebas unitarias y comportamiento. Se utilizó el enfoque GitHub Flow y automatización con GitHub Actions.",
        //     technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "GitHub Action", "ScrumBand"],
        //     githubUrl: "https://github.com/JuanSilva2000/Escape-room"
        // }
    ]

    return (
        <section className="project-wrap"
            style={{ '--scrollbar-color': selectedTheme.colors[2] }}
        >
            <h1
                className='title'
                style={{ color: selectedTheme.colors[2] }}
            >|PROYECTOS</h1>

            {projectsData.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    webUrl={project.webUrl}
                />
            ))}
        </section>
    )
}
