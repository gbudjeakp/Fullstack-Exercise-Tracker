import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Createusers () {
  const [user, setUser] = useState({ username: '' })

  function addUser (e) {
    e.preventDefault()

    const postUrl = async () => {
      const res = await axios.post('https://gainzcircuit.herokuapp.com/users/add', user)
      const data = res.data
      window.alert(data)
    }
    postUrl()
    window.location = '/create'
  }

  return (
    <div className='container'>
      <h3>Create New User</h3>
      <form>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            className='form-control'

            onChange={(e) => setUser({ username: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Create User' className='btn btn-primary' onClick={addUser} />
        </div>
      </form>
    </div>
  )
}

export default Createusers
