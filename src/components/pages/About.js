import '../../styles/About.scss'
import image from '../../images/profile.jpg'


const About = () => {
  return (
    <div className='about-container'>
      <img className="profile-pic"src={image} alt="Profile"></img>
      <p className='profile-text'> <br></br>
        Hi! I'm Scott. <br></br> <br></br>
        I am a Multidisciplinary Full Stack Web Developer and Data Analyst with a passion for condensing large data into a simple to understand story and building websites from mockup to rollout. Adept at working independently as well as collaborating with teams across multiple functions to break down concepts in layman terms. Bring experience obtained through a cross-functional organization to streamline data analysis, reporting, and auditing. Prepared to excel in solving complex problems.  <br></br> <br></br>
        </p>
    </div>
  )
}

export default About
