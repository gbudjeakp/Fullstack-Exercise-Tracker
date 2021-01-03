import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Createexercise () {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/users/')
      const userz = res.data
      if (userz.length > 0) {
        setUsers(userz.map((usei) => usei.username))
      } else {
        window.location = '/user'
      }
    }
    fetchUsers()
  }, [])

  function descript (e) {
    const d = e.target.value
    setDescription(d)
  }

  function userN (e) {
    const uN = e.target.value
    setUsername(uN)
  }

  function dura (e) {
    const dura = e.target.value
    setDuration(dura)
  }

  function handleSubmit (e) {
    e.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: startDate
    }

    const postUrl = async () => {
      const res = await axios.post('http://localhost:5000/exercises/add', exercise)
      const data = res.data
      console.log(data)
    }
    postUrl()
    // window.location = '/'
  }

  return (
    <div className='container'>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <select required className='form-control' onChange={userN} value={username}>
            {users.map((user) => {
              return (
                <option key={user} value={user}>{user}</option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input type='text' required className='form-control' onChange={descript} />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input type='number' onChange={dura} value={duration} />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>

        <div className='form-group'>
          <input type='submit' value='Create Exercise Log' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default Createexercise
