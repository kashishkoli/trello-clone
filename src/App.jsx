import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <>
    <Header></Header>
    <div className="flex">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    </>
  )
}

export default App
