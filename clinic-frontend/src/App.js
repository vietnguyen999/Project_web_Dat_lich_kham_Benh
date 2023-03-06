import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './page/home/Home'
import About from './page/about/About'
import Blog from './page/blog/Blog'
import News from './page/news/News';
import Contact from './page/contact/Contact';
import List from './page/list/List';
import Rangsu from './page/Rangsu/Rangsu';
import Nabar from './layout/Nabar'



function App() {
  return (
    <div className="App">
      <Nabar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/rangsu" element={<Rangsu />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        
      </Routes>
      
      
    </div>
  );
}
export default App;