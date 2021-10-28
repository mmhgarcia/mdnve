import styles from './Footer.module.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (

    <>
     
      <div className={`bg-dark text-center text-white ${styles.container}`} style={{ margin: "0px 0px 0px 0px" }}>
        
        <div className="row" style={{ padding: "10px 35px 10px 35px" }}>
          
          
          <div className="col-sm text-center" >
            <label className={styles.title}>Vistas</label>
            <br /><br />
            <Link className={styles.navLink} to="/">Home</Link>
            <br /><br />
            <Link className={styles.navLink} to="/about">About</Link>
            <br /><br />
            <Link className={styles.navLink} to="/contact">Contact</Link>
            <br /><br />
            <Link className={styles.navLink} to="/terms">Terms</Link>
            <br /><br />
            <Link className={styles.navLink} to="/privacy">Privacy</Link>
            <br /><br />
          </div>
          
          

          <div className="col-sm" style={{ }}>
            <br />
                      
          </div>
        
        </div>
      
      </div>
      
      <div className={`text-center pb-4 pt-4 text-white ${styles.copy}`} >        
        <label>Octubre 2021</label>
      </div>
      
      <br /><br />
  
    </>

  )

};

export default Footer;