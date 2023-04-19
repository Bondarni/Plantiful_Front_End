import './AreaCard.css'
import { Link } from 'react-router-dom'

const AreaCard = ({ area }) => {
  let area_id = area.id
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
      <Link to={`/areas/${area_id}`}>
        <button className="editbutton">Edit Space Details</button>
      </Link>
      <Link to={`/areas/delete/${area_id}`}>
        <button className="deletebutton">Remove Space</button>
      </Link>
    </div>
  )
}

export default AreaCard
