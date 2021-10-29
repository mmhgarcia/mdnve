import styles from './Header.module.css';

const Header = () => {

  return (

    <>

      <div className={`d-flex justify-content-between ${styles.topbox}`}>
        <div>
          MDNVE
        </div>
        
        <div>          
        </div>
        
        <div>
          T I F
        </div>
      </div>

      <div className={`${styles.mainbox}`}>
        <label>Mesa de Negocios Venezuela</label>
        
      </div>

    </>  
  )
};

export default Header;