import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import HomepageLayout from './components/HomepageLayout'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <HomepageLayout />
      </div>
    )
  }
}

export default App
