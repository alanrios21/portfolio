import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Clima from '../../../public/imagenes/Clima.png'
import {BsArrowUp} from 'react-icons/bs';
import Divider from '@mui/material/Divider';
import Music from '../../../public/imagenes/Musicos.png'


const Projects = () => {
  return (
    <>
    <div className='box-projects'>
    <Card id='projects' className='animate__animated animate__backInDown card-project-one shadow-lg' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Clima} />
      <Card.Body>
        <Card.Title>Aplicacion del Clima</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript
        </Card.Text>
        <Button variant="primary" className='button-projects' href="https://roseweather.netlify.app/"
        target="_blank"
        rel="noreferrer">Ver<BsArrowUp className='arrow'></BsArrowUp></Button>
      </Card.Body>
    </Card>
    <Card id='projects' className='animate__animated animate__backInDown card-project-one shadow-lg' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height: '220px'}} src={Music} />
      <Card.Body>
        <Card.Title>Aplicacion Musico para Independientes</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript, React
        </Card.Text>
        <Button variant="primary" className='button-projects' href="https://roundpeople.netlify.app/"
        target="_blank"
        rel="noreferrer">Ver<BsArrowUp className='arrow'></BsArrowUp></Button>
      </Card.Body>
    </Card>
    </div>
    <Divider className='divider'/>
    </>
  )
}

export default Projects
