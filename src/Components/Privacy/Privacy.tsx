import { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';

const Privacy = () => {

  const [md, setMD] = useState("");

  useEffect(() => {
    import(`./${'./Privacy.md'}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMD(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ margin: "2% 5% 2% 5%" }}>
      <Markdown children={md} />
    </div>
  );

}

export default Privacy;