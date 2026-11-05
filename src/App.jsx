// import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import './index.css'
//import Nav from './nav';
import Theme from './components/theme';
import Project from './components/project';
import Blog from './components/blog';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Nav from './components/nav';
function App() {
  

  return (
    <BrowserRouter>
    <Nav/>
    <Theme />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
