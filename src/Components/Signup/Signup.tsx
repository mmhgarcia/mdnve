import styles from './Signup.module.css';
//import { useState } from 'react'

const Signup = () => {

  //const [md, setMD] = useState("");

  return (
    <>
      <div className={`bg-dark text-center text-white ${styles.subscribebox}`} style={{  }}>

        <div className="" style={{padding: "10px 35px 10px 35px" }}>

          <h3>Suscribirse a nuestro boletín</h3>
          <p>Su correo solo será utilizado para enviarle nuestro boletín. Podrá cancelar la suscripción cuando Ud. lo desee.</p>

          <form className="form-inline" action="">
            <div className="d-flex justify-content-start">
              <input type="email" className="form-control" id="email" placeholder="Ingrese su email." name="email" />
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>          
          </form>

          <br/>
        </div>
      </div>

      
    </>

  );

}

export default Signup;
