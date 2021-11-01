import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (

    <>
     
      <div className={`bg-dark text-center text-white ${styles.container}`}>
        
        <Link className={styles.navLink} to="/">Home</Link>
            
        <Link className={styles.navLink} to="/about">Acerca</Link>
            
        <Link className={styles.navLink} to="/contact">Contacto</Link>
            
        <Link className={styles.navLink} to="/terms">Términos</Link>
            
        <Link className={styles.navLink} to="/privacy">Privacidad</Link>
        
      </div>
      
      <div className={`text-center pb-3 pt-3 ${styles.copy}`} >        
        <label>MDNVE - 2021</label>
      </div>     
        
      <br />
    </>

  )

};

export default Footer;