import Header from "./Heaer/Header";
import Footer from "./Footer/Footer";


function LayoutDefault({children}) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content" >
            {children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LayoutDefault;
