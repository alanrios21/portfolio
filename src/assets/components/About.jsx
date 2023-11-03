import imgAbout from '../../../public/imagenes/ilustracion-about.avif'
import { HiArrowTrendingUp } from "react-icons/hi2";
import Divider from '@mui/material/Divider';


  const onButtonClick = () => {
    const pdfUrl = "Alan Rios CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Alan Rios CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const About = () => {
  return (
    <>
    <div id='home' className="container animate__animated animate__backInDown">
    <div className="d-flex justify-content-start about-text">
            <h2>Desarrollador Web</h2>
            <p>Hola soy Desarrollador Frontend, cada día me esfuerzo para alcanzar mis logros, mejorar mis capacidades y obtener nuevos conocimientos. Me gustaría formar parte de un equipo IT y desarrollarme profesionalmente en una empresa. </p> 
            <button onClick={onButtonClick} className="btn text-white button-cv" style={{background: '#8873ef'}}>Descargar CV <HiArrowTrendingUp></HiArrowTrendingUp></button>      
    </div>
    <div className="d-flex justify-content-end">
       <img className="img-about" src={imgAbout}></img>
   </div>
</div>
<Divider className='divider'/>
</>
  )

 
}

export default About
