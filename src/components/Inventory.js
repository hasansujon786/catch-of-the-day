import React from 'react'
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

export default Inventory

