import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import Footer from '../Footer/Footer';

const Info = () => {

  //acceso data recibida
  const location = useLocation();  
  const datos: any = location.state;

  console.log("en info, datos vale ......")
  console.log(datos);


  const props = datos.datos.data;

  console.log(props);

  return (
    <>
      <h1>INFO</h1>

      <h2>
        {props.titulo}
      </h2>

      <p>
        {props.subtitulo}
      </p>

      <p>
        {props.detalle}
      </p>

      <p>
        {props.publicado}
      </p>

      <p>
        {props.autor}
      </p>
     
      <br />
      
      <Link to="/">Back</Link>
     
    </>
  );

}


export default Info;