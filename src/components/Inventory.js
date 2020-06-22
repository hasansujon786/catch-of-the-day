import React, {Component} from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'

import base, {firebaseApp} from '../base'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Auth from './Auth'
// const Inventory = ({fishes, addFish, loadSampleFishes, updateFish, deleteFish}) => {
class Inventory extends Component {
  state = {
    uid: null,
    owner: null
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log({user})
      if (user) {
        this.authHandler({user})
      }
    })
  }

  authHandler = async authData => {
    const {storeId} = this.props
    console.log({authData})
    const store = await base.fetch(storeId, {context: this});
    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })

  }
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }
  logout = async () => {
    await firebase.auth().signOut();
    this.setState({uid: null, owner: null});
  }

  render() {
    const logout = <button onClick={this.logout}>Log out</button>
    const {fishes, addFish, loadSampleFishes, updateFish, deleteFish} = this.props
    const {uid, owner} = this.state

    if (!uid) {
      return <Auth logout={this.logout} authenticate={this.authenticate} />
    }
    if (uid !== owner) {
      return (
        <div>
          {logout}
          <p>Sorry, you are not the owner</p>
        </div>
      )
    }

    return (
      <div className="inventory">
        <h2>inventory</h2>
        {logout}
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

}

Inventory.propTypes = {
  fishes: PropTypes.object,
  addFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
}

export default Inventory

