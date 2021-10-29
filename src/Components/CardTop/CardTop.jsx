import './CardTop.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CardTop = (props) => {

    return (  

      <>
        
       <Link to={{ pathname: '/info', state: { datos: props } }} style={{textDecoration: 'none'}}>

          <div className="col-md-12" style={{marginTop: 0}}>

            <div className="card">

             <h4>
               {props.data.titulo}
             </h4>

              <img className="card-img-top img-fluid responsive" src={`/Assets/img/${props.data.image}`} alt="" />

            </div>

          </div>
        
        </Link>

      </>
  )

}

export default CardTop;