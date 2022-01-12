import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<FeedbackForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
