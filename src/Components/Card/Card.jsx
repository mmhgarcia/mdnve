import './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {

   return (  

    <>

      <Link to={{ pathname: '/info', state: { datos: props } }} style={{ textDecoration: 'none', border: 'none' }}>

        <div className="card">
           
          <div className="col-md-12" style={{ marginTop: 0 }}>
          
            <div className="card border-0">

              <img className="border-0 card-img-top img-fluid responsive" src={`/Assets/img/${props.data.image}`} alt="" />

              <div className="card-info">

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

          </div>
       
        </div>

      </Link>

    </>

  )

}

export default Card;