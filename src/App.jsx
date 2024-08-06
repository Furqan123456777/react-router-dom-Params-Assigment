import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Produce from './Produce'

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="produce/:id" element={<Produce />} />    
    </Routes>
  )
}

export default App