import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './App.css';
import base from '../../base'

import Header from '../Header'
import Order from '../Order'
import Inventory from '../Inventory'
import sampleFishes from '../../sample-fishes'
import Fish from '../Fish';
// import {isObjectEmpty} from '../../helpers';

class App extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    fishes: {},
    order: {}
  }
  componentDidMount() {
    const {params} = this.props.match

    const localOrder = JSON.parse(localStorage.getItem(params.storeId)) || {}
    this.setState({order: localOrder})

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish
    this.setState({fishes})
  }
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }
  addToOrder = (key) => {
    const {params} = this.props.match
    const order = this.state.order
    order[key] = order[key] + 1 || 1
    this.setState({order})
    localStorage.setItem(params.storeId, JSON.stringify(order))
  }
  removeFromOrder = (key) => {
    const {params} = this.props.match
    const order = this.state.order
    delete order[key]
    this.setState({order})
    localStorage.setItem(params.storeId, JSON.stringify(order))
  }
  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({fishes})
  }
  deleteFish = (key) => {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({fishes})

    this.removeFromOrder(key)
  }

  render() {
    const {fishes, order} = this.state
    return (
      <div className="catch-of-the-day" >
        <div className="menu">
          <Header tagline='Frest seafood market' />
          <ul className="fishes">
            {
              Object.keys(fishes).map(key =>
                <Fish key={key} fish={fishes[key]} index={key}
                  addToOrder={this.addToOrder} />)
            }

          </ul>
        </div>

        <Order fishes={fishes} order={order} removeFromOrder={this.removeFromOrder} />
        <Inventory
          storeId={this.props.match.params.storeId}
          fishes={fishes}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;
