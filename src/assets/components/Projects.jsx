import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Clima from '../../../public/imagenes/Clima.png'
import {BsArrowUp} from 'react-icons/bs';
import Divider from '@mui/material/Divider';
import Ecommerce from '../../../public/imagenes/Ecommerce.png'
import Musicos from '../../../public/imagenes/Musicos.png'
import Visiona from '../../../public/imagenes/Backoffice.png'

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
    <Card.Img variant="top" style={{height: '220px'}} src={Ecommerce} />
      <Card.Body>
      <Card.Title>Ecommerce ShopSwiftly</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript, React
        </Card.Text>
        <Button variant="primary" className='button-projects' href="https://www.youtube.com/watch?v=t1HolY-kVMI"
        target="_blank"
        rel="noreferrer">Ver<BsArrowUp className='arrow'></BsArrowUp></Button>
      </Card.Body>
    </Card>
    <Card id='projects' className='animate__animated animate__backInDown card-project-one shadow-lg' style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{height: '220px'}} src={Musicos} />
      <Card.Body>
      <Card.Title>RoundPeople Music</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript, React
        </Card.Text>
        <Button variant="primary" className='button-projects' href="https://www.youtube.com/watch?v=ljIPYIcC0_Q"
        target="_blank"
        rel="noreferrer">Ver<BsArrowUp className='arrow'></BsArrowUp></Button>
      </Card.Body>
    </Card>
    <Card id='projects' className='animate__animated animate__backInDown card-project-one shadow-lg' style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{height: '220px'}} src={Visiona} />
      <Card.Body>
      <Card.Title>VisionaGroup</Card.Title>
        <Card.Text>
          Hecho con HTML, CSS, Javascript, SQL, C#, .NET core
        </Card.Text>
        <Button variant="primary" className='button-projects' href="https://www.youtube.com/watch?v=v21Mp4D9gaA"
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
