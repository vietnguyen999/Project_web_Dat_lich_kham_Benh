
import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Profile from "./components/Profile/Profile";
import { getToken } from "./helpers";
import { Login } from './page/Login';
import { Register } from './page/Register';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<Login/>}/>
        <Route path='/signUp' element={<Register/>}/>
        <Route
            path="/profile"
            element={getToken() ? <Profile /> : <Navigate to="/signin" />}
          />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
