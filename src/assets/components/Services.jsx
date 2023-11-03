import imgServiceOne from '../../../public/imagenes/Servicio01.jpg'
import imgServiceTwo from '../../../public/imagenes/servicio02.jpg'
import imgServiceThree from '../../../public/imagenes/servicio03.jpg'
import Divider from '@mui/material/Divider';

const Services = () => {
  return (
    <>
<div id='services' className="services-one container d-flex animate__animated animate__backInDown" style={{marginTop: '100px'}}>
    <div className=" d-flex justify-content-start about-text-service-one">
            <h2>Interfaz de usuario</h2>
            <p>A través de herramientas como HTML, CSS y JavaScript, construyo el diseño y la estructura de la web.</p> 
    </div>  
    <div className="d-flex justify-content-end ">
        <img className="img-service-one" src={imgServiceOne}></img>
    </div> 
</div>
<div className="services-two container d-flex animate__animated animate__backInDown" style={{marginTop: '100px'}}>
   <div className="d-flex justify-content-start ">
        <img className="img-service-two" src={imgServiceTwo}></img>
  </div>
<div className="d-flex justify-content-end about-text-service-two">
        <h2>Desarrollado de funcionalidades</h2>
        <p>Mediante el uso de librerias y frameworks, desarrollo funcionalidades para que todo funcione correctamente.</p> 
   </div>
</div>
<div className="services-three container d-flex animate__animated animate__backInDown" style={{marginTop: '100px', marginBottom: '200px'}}>
<div className=" d-flex justify-content-start about-text-service-one">
<h2>Diseño web adaptable</h2>
    <p>Diseño de la web adaptada en distintas resoluciones de pantallas: escritorio, tablet y mobile.</p> 
    </div>  
    <div className="d-flex justify-content-end ">
        <img className="img-service-one" src={imgServiceThree}></img>
    </div>
</div>
<Divider className='divider'/>
</>
  )
}

export default Services
