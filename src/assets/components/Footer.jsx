import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/Linkedin';

const Footer = () => {
  return (
    <div className="footer animate__animated animate__backInDown">
        © 2023 <a style={{marginLeft: '10px'}} href="#home">Alan Rios</a>
        <a style={{marginLeft: '10px'}} target='_blanck' href='https://github.com/alanrios21/'><GitHubIcon></GitHubIcon></a>
        <a style={{marginLeft: '10px'}} target='_blanck' href='https://www.linkedin.com/in/alan-rios/'><LinkedInIcon></LinkedInIcon></a>
    </div>
  )
}

export default Footer
