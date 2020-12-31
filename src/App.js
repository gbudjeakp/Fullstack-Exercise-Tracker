import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ExercisesList from './components/exerciseslist'
import EditExercise from './components/editexercise'
import CreateExercise from './components/createexercise'
import CreateUser from './components/createusers'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <Router>

      <div>
        <Navbar />
        <br />
        <Route exact path='/'>
          <ExercisesList />
        </Route>

        <Route exact path='/edit/:id'>
          <EditExercise />
        </Route>

        <Route exact path='/create'>
          <CreateExercise />
        </Route>

        <Route exact path='/user'>
          <CreateUser />
        </Route>
      </div>
    </Router>
  )
}

export default App
