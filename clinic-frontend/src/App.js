
import React from "react";
import AppRoutes from "./Routes";
import Nabar from "./layout/Nabar";


const App = () => {
  return(
    <div className="App">
      <Nabar />
      <AppRoutes />
    </div>
  ) 
}

export default App;
