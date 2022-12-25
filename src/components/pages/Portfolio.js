import Project from '../Project'
import '../../styles/Project.scss'
import projects from '../../projects'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <p className='portfolio-header'>Portfolio</p>
      <p className="header-text">Hover over headers to see GitHub repositories</p>
      <Project projects={projects}/>
    </div>
  )
}

export default Portfolio
