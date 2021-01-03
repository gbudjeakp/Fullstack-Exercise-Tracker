import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

function Exerciseslist () {
  const [exercises, setExercises] = useState([])

  const deleteFetch = async (id) => {
    const res = await axios.delete(`https://gainz-circuit.herokuapp.com/exercises/${id}`)
    const del = res.data
    setExercises(exercises.filter(el => el._id !== id))
    console.log(del)
  }

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await axios.get('https://gainz-circuit.herokuapp.com/exercises/')
      const exerciseList = res.data

      setExercises(exerciseList)
    }
    fetchExercises()
  }, [])

  const Exercise = ({ exercise, deleteExercise }) => (
    <tr style={{ color: 'white' }}>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${exercise._id}`} className='button' style={{ textDecoration: 'none' }}>edit</Link>
        <div style={{ paddingTop: '5px' }} />
        <Button onClick={() => { deleteExercise(exercise._id) }} variant='outline-warning' size='sm'>Delete</Button>
      </td>
    </tr>
  )

  return (
    <div className='container'>
      <h3>Logged Exercises</h3>
      <div className='table-responsive'>
        <table className='table table-striped'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration(in minutes)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => {
              return (<Exercise exercise={exercise} key={exercise._id} deleteExercise={deleteFetch} />)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Exerciseslist
