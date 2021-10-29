import './Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from '../../Containers/Cards/Cards';
import Header from '../Header/Header';
import Author from '../Author/Author';
import Signup from '../Signup/Signup';
import Footer from '../Footer/Footer';

function Home() {
  return (   

    <>

      <section id="facilities">

        <div id="container">

          <Header />

          <Cards />

          <Author />

          <Signup />

          <Footer />

        </div>

      </section>
    
    </>
  
  );
}

export default Home;
