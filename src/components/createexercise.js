import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Createexercise () {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  return (
    <div className='container'>
      <h3>Create New Exercise Log</h3>
      <form>
        <div className='form-group'>
          <label>Username: </label>
          <select required className='form-control' />
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input type='text' required className='form-control' />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <DatePicker />
        </div>

        <div className='form-group'>
          <input type='submit' value='Create Exercise Log' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default Createexercise
