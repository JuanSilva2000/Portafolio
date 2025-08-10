import { useContext } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../../context/AppContext'
import GitHubIcon from '@mui/icons-material/GitHub'

export const ProjectItem = ({ title, description, technologies, githubUrl }) => {
    const { selectedTheme } = useContext(AppContext)

    return (
        <span className='project-decription'>
            <h2 
                style={{ color: selectedTheme.colors[2] }} 
                className='title-project'
            >
                ● {title} 
                <a 
                    style={{ color: selectedTheme.colors[2] }} 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
            </h2>

            <p 
                style={{ color: selectedTheme.colors[1] }} 
                className='content-project'
            >
                {description}
            </p>

            <span className='tecnologies-projects'>
                {technologies.map((tech, index) => (
                    <p key={index}>{tech}</p>
                ))}
            </span>
        </span>
    )
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired
}
