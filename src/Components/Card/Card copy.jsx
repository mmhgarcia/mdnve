import Info from './../Info/Info';
import './Card.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Card = (props) => {

  console.log("en card props vale...")
  console.log(props.data.image);
    
   return (  

      <div className="col-md-3">
     
       <div className="card text-center" style={{ height: '100%'}}>

         <img className="card-img-top img-fluid" src={`/Assets/img/${props.data.image}` } alt=""  />
         
          <div className="card-body">

            <p className="card-text">{props.data.subtitulo}</p>

            <h5 className="card-title">{props.data.titulo}</h5>

            <p className="card-text">{props.data.publicado}</p>

            <Link to={{pathname: '/info', state:{datos: props} }}>
                <button className="btn btn-primary">More info</button>
            </Link>

          </div>

        </div>

      </div>
  )

}

export default Card;