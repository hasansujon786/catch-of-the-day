import React, {Component} from 'react';
import './App.css';
import base from '../../base'

import Header from '../Header'
import Order from '../Order'
import Inventory from '../Inventory'
import sampleFishes from '../../sample-fishes'
import Fish from '../Fish';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  }
  componentDidMount() {
    const {params} = this.props.match
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
    const order = this.state.order
    order[key] = order[key] + 1 || 1
    this.setState({order})
  }

  render() {
    const {fishes} = this.state
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
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
