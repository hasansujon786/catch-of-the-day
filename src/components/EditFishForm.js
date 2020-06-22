import React from 'react'
import PropTypes from 'prop-types'

const EditFishForm = ({fish, index, updateFish, deleteFish}) => {
  const handleChange = (e) => {
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    updateFish(index, {...updatedFish, price: parseFloat(updatedFish.price)})
  }

  return (
    <div className='fish-edit'>
      <input type='text' placeholder='name' name='name' onChange={handleChange} value={fish.name} />
      <input type='text' placeholder='price' name='price' onChange={handleChange} value={fish.price} />
      <select type='text' placeholder='status' name='status' onChange={handleChange} value={fish.status} >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold out!</option>
      </select>
      <textarea placeholder='desc' name='desc' onChange={handleChange} value={fish.desc}></textarea>
      <input type='text' placeholder='image' name='image' onChange={handleChange} value={fish.image} />
      <button onClick={() => deleteFish(index)}>Remove fish</button>
    </div>
  )
}

EditFishForm.propTypes = {
  fish: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string
  }),
  index: PropTypes.string,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func
}
export default EditFishForm


