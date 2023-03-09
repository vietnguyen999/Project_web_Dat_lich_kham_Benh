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
import Bocsu from './page/Rangsu/Bocsu';
import Matdansu from './page/Rangsu/Matdansu'
import AppRoutes from "./Routes";



const App = () => {
  return(
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
        <Route path="/bocsu" element={<Bocsu />} />
        <Route path="/madansu" element={<Matdansu />} />
        
      </Routes>
      
      
      <AppRoutes />

    </div>
  ) 
}

export default App;
