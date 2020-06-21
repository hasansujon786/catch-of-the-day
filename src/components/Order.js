import React, {Component} from 'react'
import {formatPrice, isObjectEmpty} from '../helpers'

class Order extends Component {
  renderOrder = (key) => {
    const {order, fishes, removeFromOrder} = this.props;
    const fish = fishes[key]
    const count = order[key]
    const price = count * fish.price
    let renderFish = null
    if (fish.status === 'available') {
      renderFish = `${count} lbs ${fish.name} ${formatPrice(price)}`
    } else {
      renderFish = `Sorry, ${fish && fish.name ? fish.name : 'fish'} not available`
    }

    return (
      <li key={key} >
        {renderFish}
        <button onClick={() => removeFromOrder(key)}>&times;</button>
      </li>
    )
  }

  render() {
    const {order, fishes} = this.props;
    // make sure fish is loaded then continu
    if (isObjectEmpty(fishes) || isObjectEmpty(order)) {
      return (
        <div>
          <h2>No order</h2>
          <ul className="order">
          </ul>
          <div className="total">
            Total:
          <strong>{formatPrice(0)}</strong>
          </div>
        </div>
      )
    }

    const orderIds = Object.keys(order)
    const total = orderIds.reduce((preTotal, curKey) => {
      const fish = fishes[curKey]
      const price = order[curKey] * fish.price
      const isAvailable = fish && fish.status === 'available'

      return isAvailable ? (preTotal + price) : preTotal
    }, 0)

    return (
      <div>
        <h2>order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order


