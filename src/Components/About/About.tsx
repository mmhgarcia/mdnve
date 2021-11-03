import { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';
//import styles from './About.module.css';
import {Contenedor} from '../Styled/Controls';

const About = () => {

  const [md, setMD] = useState("");

  useEffect(() => {
    import(`./${'./Acerca.md'}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMD(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },[]);

  return (
            
    <Contenedor>
    
      <Markdown children={md} />
    
    </Contenedor>
    
  );

}

export default About;
