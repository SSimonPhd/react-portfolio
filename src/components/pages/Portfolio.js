import Project from '../Project'
import '../../styles/Project.scss'
import projects from '../../projects'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <p className='portfolio-header'>Portfolio</p>
      <p className="header-text">Click on title for app, click on GitHub icon for repository</p>
      <Project projects={projects}/>
    </div>
  )
}

export default Portfolio
