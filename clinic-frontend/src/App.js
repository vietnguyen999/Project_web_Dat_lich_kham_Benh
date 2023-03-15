import React from "react";
import AppRoutes from "./Routes";
import Nabar from "./layout/Nabar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const App = () => {
  return (
    <div className="App">
        <Nabar />
        <AppRoutes />
    </div>
  );
};

export default App;
