import { useContext } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../../context/AppContext'
import GitHubIcon from '@mui/icons-material/GitHub'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const ProjectItem = ({ title, description, technologies, githubUrl, webUrl }) => {
    const { selectedTheme } = useContext(AppContext)

    return (
        <span className='project-decription'>
            <h2
                style={{ color: selectedTheme.colors[2] }}
                className='title-project'
            >
                ● {title}
                {githubUrl && (
                    <a
                        style={{ color: selectedTheme.colors[2] }}
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </a>
                )}
                {webUrl && (
                    <a
                        style={{ color: selectedTheme.colors[2] }}
                        href={webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='ml-2'
                    >
                        <TravelExploreIcon />
                    </a>
                )}
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
    githubUrl: PropTypes.string,
    webUrl: PropTypes.string
}
