import img from "../../assets/germany.png"
import "./card.css"

const Card = () => {
  return(
    <>
    <li className="item">
    <img src={img} alt="Germany" />
    <div className="item__wrapper">
    <strong className="item__name">
    Germany
    </strong>
    <span className="item__population">
    Population: 81,770,900
    </span>
    <span className="item__region">
    Region: Europe
    </span>
    <span className="item__capital">
    Capital: Berlin
    </span>
    </div>
    </li>
    </>
    )
  }
  
  export default Card