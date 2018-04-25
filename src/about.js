import React from 'react'
import ReactDOM from 'react-dom'
import AboutApp from './AboutApp.jsx'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AboutApp />, document.getElementById('root'))
registerServiceWorker()
