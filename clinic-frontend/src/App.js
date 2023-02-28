import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import { Login } from './page/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
