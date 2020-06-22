import React from 'react'
import PropTypes from 'prop-types'
import {formatPrice} from '../helpers'

const Fish = ({fish, index, addToOrder}) => {
  const {image, name, price, desc, status} = fish
  const isAvailable = status === 'available'

  return (
    <div className='menu-fish'>
      <img src={image} alt={name} />
      <h3 className='fish-name'>
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button onClick={() => addToOrder(index)}
        disabled={!isAvailable}>{isAvailable ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  )
}

Fish.propTypes = {
  fish: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string
  }),
  addToOrder: PropTypes.func,
  index: PropTypes.string
}
export default Fish
