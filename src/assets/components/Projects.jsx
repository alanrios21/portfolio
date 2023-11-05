import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Clima from '../../../public/imagenes/Clima.png'
import {BsArrowUp} from 'react-icons/bs';
import Divider from '@mui/material/Divider';


const Projects = () => {
  return (
    <>
    <Card id='projects' className='animate__animated animate__backInDown card-project-one shadow-lg' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Clima} />
      <Card.Body>
        <Card.Title>Aplicacion del Clima</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript
        </Card.Text>
        <Button variant="primary" href="https://roseweather.netlify.app/"
        target="_blank"
        rel="noreferrer">Ver<BsArrowUp className='arrow'></BsArrowUp></Button>
      </Card.Body>
    </Card>
    <Divider className='divider'/>
    </>
  )
}

export default Projects
