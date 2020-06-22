import React from 'react'
import PropTypes from 'prop-types'

const Auth = ({authenticate}) => {
  return (
    <div>
      <h2>Login here</h2>
      <button className='github' onClick={() => authenticate('Github')}>Github</button>
      <button className='facebook' onClick={() => authenticate('Facebook')}>Facebook</button>
      <button className='twitter' onClick={() => authenticate('Twitter')}>Twitter</button>
    </div>
  )
}

Auth.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Auth
