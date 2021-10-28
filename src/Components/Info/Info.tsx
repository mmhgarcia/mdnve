import {useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import Footer from '../Footer/Footer';
import Markdown from 'markdown-to-jsx';

const Info = () => {


  const [md, setMD] = useState("");

  //acceso data recibida
  const location = useLocation();  
  const datos: any = location.state;
  const props = datos.datos.data;
  //const mdName = datos.datos.data.md;

  console.log("en info, datos.datos.data vale ......")
  console.log(datos.datos.data);

  console.log("en info, datos.datos.data.md vale ......")
  console.log(datos.datos.data.md);
  console.log(props);


  useEffect(() => {
    import(`../MD/${datos.datos.data.md}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMD(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });


  return (
    <>

      <div style={{textAlign: 'center'}}>
        Publicado: {props.publicado} - Autor: {props.autor}
      </div>

      <img className="card-img-top img-fluid responsive" src={`/Assets/img/${props.image}`} alt="" />

      <Link to="/">Back</Link>

      <div>
        <Markdown children={md} />
      </div>

    </>
  );

}

export default Info;

