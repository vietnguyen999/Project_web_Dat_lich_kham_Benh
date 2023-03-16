import Header from "./Header/Header";

function LayoutDefault({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayoutDefault;
