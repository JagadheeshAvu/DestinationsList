// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList
  return (
    <li>
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
