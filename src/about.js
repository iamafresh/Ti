import React from 'react'
import ReactDOM from 'react-dom'
import AboutApp from './AboutApp.jsx'
import registerServiceWorker from './registerServiceWorker'

// 为何id改为root就可以了
ReactDOM.render(<AboutApp />, document.getElementById('root'))
registerServiceWorker()
