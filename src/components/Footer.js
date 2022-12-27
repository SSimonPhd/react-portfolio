import '../styles/Footer.scss'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <a className="github-icon" href="https://github.com/SSimonPhd" target="blank">
        <i><FaGithub/></i>
        </a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/scottsimon/ " target="blank">
        <i><FaLinkedin /></i>
        </a>
				<div class="footer-text align-right">

				<p>&copy; copyright Scott J. Simon, Ph.D. Valid  <a href="http://jigsaw.w3.org/css-validator/">CSS</a> | <a href="http://validator.w3.org/">HTML</a></p>

				</div>
    </footer>
  )
}

export default Footer
