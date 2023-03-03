
import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Profile from "./components/Profile/Profile";
import { getToken } from "./helpers";
import { publicRouters } from './routers';
import LayoutDefault from './components/layout/Layout';

function AppRoutes () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {publicRouters.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />}/>
        })}
        {/* <Route
            path="/profile"
            element={getToken() ? <Profile /> : <Navigate to="/signIn" />}
          /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRoutes ;
