import React from 'react'

const EditFishForm = ({fish, index, updateFish, deleteFish}) => {
  const handleChange = (e) => {
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    updateFish(index, updatedFish)
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

export default EditFishForm


