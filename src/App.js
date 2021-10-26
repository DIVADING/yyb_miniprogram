import React, {Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './pages/login/login.jsx'


export default class App extends Component {
render(){
  return(
    <div className='App'>
      <Login></Login>
    </div>
    
  )
}
}
