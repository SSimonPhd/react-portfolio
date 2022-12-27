// Import Github icon
import { FaGithub } from 'react-icons/fa'

// Import styles
import '../styles/Project.scss'

const Project = ({ projects }) => {
    return (
        <div className='project-container'>
            {projects.map((project) => (
            <a className="project-card" href={`${project.link}`} target='blank' key={project.id}>
                <header className='project-header'>
                    <h4 className='project-text'>{`${project.title}`}</h4>
                    <a className='hide' href={`${project.github}`} target='blank'>
                        <FaGithub /></a></header>
                <img className="image" src={`${project.image}`} alt="project"></img>
            </a>
            ))}
        </div>
    )
}

export default Project
