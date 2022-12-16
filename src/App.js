import React from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Posts from './pages/Posts'
import About from "./pages/About"
import Error from './pages/Error'
import PostIdPage from './pages/PostIdPage'
import './styles/styles.css'
import Navbar from './components/UI/navbar/Navbar'


function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/posts/:id" element={<PostIdPage/>}/>
     </Routes>
    </>
  )
}

export default App