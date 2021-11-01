import './CardH.module.css';
import { Link } from 'react-router-dom';

const CardH = (props) => {

  var colors = ['#b9936c', '#dac292', '#e6e2d3', '#c4b7a6', '#b5e7a0', '#82b74b'];

    const _color = colors[Math.floor(Math.random() * colors.length)];

   return (  

    <>

      <Link to={{ pathname: '/info', state: { datos: props } }} style={{ textDecoration: 'none', border: 'none', marginTop: '15px' }}>

         <div class="row">

          <div class="col" style={{backgroundColor: _color }}>

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

           <div class="col" style={{ backgroundColor: 'lightgray', paddingTop: '0px' }}>
           
             <img style={{ maxWidth: '100%', maxHeight: '100%' }} className="border-0 card-img-top img-fluid responsive" src={`/Assets/img/${props.data.image}`} alt="" />
           
          </div>

         </div>
      
      </Link>

        
       
    </>

  )

}

export default CardH;