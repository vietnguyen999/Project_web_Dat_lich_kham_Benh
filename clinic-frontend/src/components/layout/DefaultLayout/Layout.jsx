import Footer from "./Footer/Footer";
import Nabar from "./Navbar/Nabar";
import "./Layout.css"

function LayoutDefault({ children }) {
  return (
    <div>
      <Nabar />
      <div className="default-layout" >{children}</div>
      <Footer />
    </div>
  );
}

export default LayoutDefault;
