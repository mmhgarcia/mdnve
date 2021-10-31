import './Cards.module.css';
import Card from '../../Components/Card/Card';
import { jsonData } from "../../Assets/json/Data";

const Cards = () => {
  
  return(
    <>  
  
      <div className="row" style={{ alignItems: "flex-start"}}>
        {
          jsonData.slice(0).map( (ob, index) => <Card key={index} data={ob} /> )        
        }
      </div>

    </>
  )

}

export default Cards;