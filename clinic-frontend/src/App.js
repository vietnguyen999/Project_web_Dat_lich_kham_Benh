
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './containet/Home'
import About from './containet/About'
import Blog from './containet/Blog'
import News from './containet/News';
import Contact from './containet/Contact';
import Nabar from './containet/Nabar'

function App() {
  return (
    <div className="App">
      <Nabar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      
      
    </div>
  );
}
export default App;