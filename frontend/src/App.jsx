import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Chat from './Chat';
import VoiceBot from './Voice';
import 'regenerator-runtime/runtime';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/voice" element={<VoiceBot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
