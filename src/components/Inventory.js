import React from 'react'
import AddFishForm from './AddFishForm'

const Inventory = ({addFish, loadSampleFishes}) => {
  return (
    <div className="">
      <h2>inventory</h2>
      <AddFishForm addFish={addFish} />
      <button onClick={loadSampleFishes}>Load sample fishes</button>
    </div>
  )
}

export default Inventory

