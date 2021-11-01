import './Cards.module.css';
import Card from '../../Components/Card/Card';
import CardH from '../../Components/CardH/CardH';
import { jsonData } from "../../Assets/json/Data";

const Cards = () => {
  
  return(
    <>  

      <div className="container">

        <div className="row" style={{ alignItems: "flex-start"}}>
          
          <p className="text-title historias-recientes">
            Historias Recientes
          </p>

          {
            jsonData.slice(0).map( (ob, index) => {
                if(ob.orientation==="v")
                  return <Card key={index} data={ob} />                
                else 
                  return <CardH key={index} data={ob} />                  
              }
            )        
          }
        </div>

      </div>

    </>
  )

}

export default Cards;