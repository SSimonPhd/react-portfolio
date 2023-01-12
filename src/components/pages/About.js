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
        Information Scientist/Web Developer with a hard focus on Blockchain, DeFi, and Web3.  
				<br></br><br></br>  
				Relevant experience in Information Architecture and Cloud Services. 
				<br></br><br></br>  
				Published researcher applying math and logic to solve real world problems.
				<br></br> <br></br>
        </p>
    </div>
  )
}

export default About
