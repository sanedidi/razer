import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Store from './Pages/Store'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
    </Routes>
  )
}

export default App