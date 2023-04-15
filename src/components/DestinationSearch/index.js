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
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDetail =>
      eachDetail.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box">
          <div>
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-input"
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="places-container">
          {searchResults.map(eachPlace => (
            <DestinationItem destinationsList={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
