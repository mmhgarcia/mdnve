import styles from './Header.module.css';

const Header = () => {

  return (

    <div className={`${styles.headerbox} ${styles.title}`}>

      <div>  
        <h1 className={`display-7 ${styles.title}`}>
          Tu Vitrina Publicitaria.
        </h1>
      </div>
   
      <div>
        
      </div>

    </div>
  
  )
};

export default Header;