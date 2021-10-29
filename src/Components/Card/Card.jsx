import './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {

   return (  

      <div className="col-md-3">
     
       <div className="card text-center" style={{ height: '100%'}}>

         <img className="card-img-top img-fluid" src={`/Assets/img/${props.data.image}` } alt=""  />
         
          <div className="card-body">

            <h5 className="card-title">{props.data.titulo}</h5>

           <p className="card-text">{props.data.subtitulo}<br />{props.data.publicado} - {props.data.autor}</p>

            <Link to={{pathname: '/info', state:{datos: props} }}>
                <button className="btn btn-primary">More info</button>
            </Link>

          </div>

        </div>

      </div>
  )

}

export default Card;