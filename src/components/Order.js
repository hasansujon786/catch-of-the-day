import React, {Component} from 'react'
import {formatPrice} from '../helpers'

class Order extends Component {
  renderOrder = (key) => {
    const {order, fishes} = this.props;
    const fish = fishes[key]
    const count = order[key]
    const price = count * fish.price
    const isAvailable = fish.status === 'available'
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry, {fish && fish.name ? fish.name : 'fish'} not available
        </li>
      )
    }
    return (
      <li key={key}>
        {count} lbs {fish.name} {formatPrice(price)}
      </li>
    )
  }

  render() {
    const {order, fishes} = this.props;
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


