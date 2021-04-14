import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ExercisesList from './components/Exerciseslist'
import EditExercise from './components/Editexercise'
import CreateExercise from './components/Createexercise'
import CreateUser from './components/Createusers'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <Router>

      <div>
        <Navbar />
        <br />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/exerciselist'>
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
