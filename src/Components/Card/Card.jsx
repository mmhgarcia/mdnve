import './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {

   return (  

      <div className="col-md-3">
     
       <Link to={{ pathname: '/info', state: { datos: props } }} style={{ textDecoration: 'none', border: 'none' }}>

         <div className="col-md-12" style={{ marginTop: 0 }}>

           <div className="card border-0">

             <img className="border-0 card-img-top img-fluid responsive" src={`/Assets/img/${props.data.image}`} alt="" />

             <h4>
               {props.data.subtitulo}
             </h4>

             <h4>
               {props.data.titulo}
             </h4>

             <h4>
               {props.data.publicado}
             </h4>


           </div>

         </div>

       </Link>

      </div>
  )

}

export default Card;