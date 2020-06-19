import React from 'react'
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

export default Fish
