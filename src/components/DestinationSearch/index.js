// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: '', destinations: destinationsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinations} = this.state
    const searchResults = destinations.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )
    return (
      <div className="container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul>
          {searchResults.map(eachItem => (
            <DestinationItem details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
