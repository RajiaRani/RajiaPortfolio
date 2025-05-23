
import './App.css'
import Footer from './Footer/index.jsx'
import Navbar from './Navbar/index.jsx'
import About from './Portfolio/About/index.jsx'
import Education from './Portfolio/Education/index.jsx'
import Index from './Portfolio/Index/index.jsx'
import Skills from './Portfolio/Skills/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Index />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
