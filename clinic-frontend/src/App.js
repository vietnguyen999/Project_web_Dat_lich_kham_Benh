// import "./App.css";
// import AppRoutes from "./Routes";
// function App() {
//   return (
//     <>
//       {/* <AppHeader /> */}
//       <AppRoutes />
//     </>
//   );
// }

// export default App;
import React from "react";
import { Col, Layout, Row } from "antd";
import { AppHeader } from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
const { Header, Content } = Layout;

const App = () => {
  return <AppRoutes />;
};

export default App;
