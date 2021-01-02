import React from 'react'
import DatePicker from 'react-datepicker'
import 'bootstrap/dist/css/bootstrap.min.css'

function Editexercise () {

  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const [users, setUsers] = useState([])


  return (
    <div className='container'>
      <h3>Edit Exercise Log</h3>
      <form>
        <div className='form-group'>
          <label>Username: </label>
          <select
            required
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            onChange{}
          />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input
            type='text'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <div>
            <DatePicker />
          </div>
        </div>

        <div className='form-group'>
          <input type='submit' value='Edit Exercise Log' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default Editexercise
