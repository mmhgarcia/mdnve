import './Cards.module.css';
import Card from '../../Components/Card/Card';
import CardTop from '../../Components/CardTop/CardTop';
import { jsonData } from "../../Assets/json/Data";

const Cards = () => {
  
  return(
    <>  
  
      <CardTop key={jsonData[0].id} data={ jsonData[0] } />

      <div className="row" style={{ alignItems: "flex-start"}}>
        {
          jsonData.slice(1).map( (ob, index) => <Card key={index} data={ob} /> )        
        }
      </div>

    </>
  )

}

export default Cards;