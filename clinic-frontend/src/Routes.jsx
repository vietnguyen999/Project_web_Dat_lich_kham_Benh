import { publicRouters } from "./routers";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout/Layout";
import { Fragment } from "react";

const AppRoutes = () => {
  return (
    <Routes>
      {publicRouters.map((route, index) => {
        let Layout = DefaultLayout;
        if(route.layout) {
          Layout = route.layout;
        } else if(route.layout === null) {
          Layout = Fragment;
        }
        
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
