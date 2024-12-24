import { Link } from "react-router-dom";
import "./league-item.css";
const LeagueItem = (props) => {
  return (
    <div className="league-item rounded-3 px-3 py-2">
      <img src={props.img}/>
      <Link className="title"><strong>{props.title}</strong></Link>
      <button className="me-auto rounded-3">{props.button}</button>
    </div>
  )
}

export default LeagueItem
