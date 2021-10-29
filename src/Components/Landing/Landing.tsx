import React, {useState} from 'react';
import styles from './Landing.module.css';
import Foto from './Landing.png';
import Signup from '../Signup/Signup';
function LandingPage() {
  
  const [datos] = useState({
    titulo: "Visión Sistémica de Gestión Empresarial",
    subtitulo: "Una Propuesta de Valor al Empresario."
  }); 

  return (        
    <>
      
      <div >

        <div className={`${styles.headerbox} ${styles.title}`}>
          <div className={`${styles.title}`}>            
              {datos.titulo}                        
          </div>
          <div className={`${styles.subtitle}`}>
            {datos.subtitulo}
          </div>
        </div>

        <div className="container">

          <div className="row">
            
            <div className="col-md-12">
              <img alt="" src={Foto} className={`responsive ${styles.image}`} />
            </div>
            
            <div className="col-md-12">
              
              <div className="card">
                <div className="card-block center"></div>
                <div className=" display-6 card-body">
                  <Signup />
                </div>
              </div>

              </div>
          </div>

        </div>

      </div>
      
    </>
  
  );

}

export default LandingPage;
