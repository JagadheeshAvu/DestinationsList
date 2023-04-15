// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDetail =>
      eachDetail.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput} <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon"/>
          />
        </div>
        <ul>
          {searchResults.map(eachDetail => (
            <DestinationItem
              destinationsList={eachDetail}
              key={eachDetail.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
