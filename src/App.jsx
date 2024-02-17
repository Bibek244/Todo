import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoWrapper } from './components/TodoWrapper'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
return(

  <BrowserRouter>
  <Routes>
  <Route path='/*' element={<TodoWrapper />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
