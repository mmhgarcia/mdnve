import './CardH.module.css';
import { Link } from 'react-router-dom';

const CardH = (props) => {

   return (  

    <>

      <Link to={{ pathname: '/info', state: { datos: props } }} style={{ textDecoration: 'none', border: 'none' }}>

         <div className="container-fluid" style={{padding: 0}}>           
          
           <div className="row" >
          
              <div style={{ backgroundColor: "white", width: "50%" }}>
               <div className="card-foot">

                 <h5 className="subtit">
                   {props.data.subtitulo}
                 </h5>

                 <p className="tit">
                   {props.data.titulo}
                 </p>

                 <p className="date">
                   {props.data.publicado}
                 </p>

               </div>
              </div>
             
              <div style={{ backgroundColor: "white", width: "50%" }}>
               <img className="border-0 card-img-top img-fluid responsive" src={`/Assets/img/${props.data.image}`} alt="" />
              </div>
           
           </div>
          
          </div>

      </Link>
       
    </>

  )

}

export default CardH;