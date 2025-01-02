import React from "react"
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from "./Footer/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="menu-header">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
