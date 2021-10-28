import styles from "./Author.module.css";

import { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

const Author = () => {

  const [md, setMD] = useState("");

  //const fName = "Author.md";

  useEffect(() => {
    import(`./${'./Author.md'}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMD(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  return (
  
    <>    
      <div className="card">        
        <div className="card-body">
          
          <div className={`row  ${styles.container}`}>

            <div className={`col-md-2 ${styles.boxImage}`} >
              <img className={`img-fluid ${styles.avatar}`} src={`/Assets/img/foto.jpg`} alt="" />
            </div>

            <div className={`col-md-10 ${styles.boxAutor}`}>
              <Markdown children={md} />              
            </div>

          </div>
        </div>
      </div>
    </>

  );

}

export default Author;