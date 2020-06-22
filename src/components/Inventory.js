import React from 'react'
import PropTypes from 'prop-types'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

const Inventory = ({fishes, addFish, loadSampleFishes, updateFish, deleteFish}) => {
  return (
    <div className="">
      <h2>inventory</h2>
      {Object.keys(fishes).map(key => <EditFishForm fish={fishes[key]}
        updateFish={updateFish}
        deleteFish={deleteFish}
        index={key}
        key={key}
      />)}
      <AddFishForm addFish={addFish} />
      <button onClick={loadSampleFishes}>Load sample fishes</button>
    </div>
  )
}

Inventory.propTypes = {
  fishes: PropTypes.object,
  addFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
}

export default Inventory

