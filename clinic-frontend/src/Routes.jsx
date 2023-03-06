import { publicRouters } from './routers';

import React from "react";
import {Route, Routes} from "react-router-dom"

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;