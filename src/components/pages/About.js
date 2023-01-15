import '../../styles/About.scss'
import image from '../../images/profile.jpg'

const About = () => {
  return (
    <div className='about-container'>
			<p className="about-header">About</p><br></br>
      <img className="profile-pic"src={image} alt="Profile"></img>
      <p className='profile-text'> <br></br>
        Hi! I'm Scott.</p>
				<p className='profile-text2'> <br></br>
        Multidisciplinary Full Stack Web Developer and Information Scientist with a talent for condensing large data into a simple to understand story and building websites from mockup to rollout.  
				<br></br><br></br>  
				Adept at working independently as well as collaborating with teams across multiple functions to break down concepts in layman terms.
				<br></br><br></br>  
				Deliver experience obtained through a cross-functional organization to streamline the development process. Prepared to excel in solving complex problems. 
				<br></br> <br></br>
        </p>
    </div>
  )
}

export default About
