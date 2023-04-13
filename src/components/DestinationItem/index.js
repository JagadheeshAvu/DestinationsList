// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {id, name, imgUrl} = details
  return (
    <div>
      <img src={imgUrl} />
      <p className="name">{name}</p>
    </div>
  )
}

export default DestinationItem
