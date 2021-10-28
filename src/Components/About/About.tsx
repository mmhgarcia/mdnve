import { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';
import styles from './About.module.css';

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
    <div className={styles.container}>
      <div className={styles.contentFormat}>
        <Markdown children={md} />
      </div>
    </div>
  );

}

export default About;