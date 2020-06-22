import React from "react";
import PropTypes from 'prop-types'

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  storeInput = React.createRef()

  goToStore = (event) => {
    event.preventDefault()
    const storeName = this.storeInput.current.value
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input ref={this.storeInput} type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
