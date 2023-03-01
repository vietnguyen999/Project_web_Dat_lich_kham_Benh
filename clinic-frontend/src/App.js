
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import { Login } from './page/Login';
import { Register } from './page/Register';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
