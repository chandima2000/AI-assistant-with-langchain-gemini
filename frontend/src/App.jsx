import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Chat from './Chat';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
