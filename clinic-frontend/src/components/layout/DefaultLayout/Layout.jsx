
import Footer from "./Footer/Footer";
import Nabar from "./Navbar/Nabar";

function LayoutDefault({ children }) {
  return (
    <div>
      <Nabar />
      <>{children}</>
      <Footer />
    </div>
  );
}

export default LayoutDefault;
