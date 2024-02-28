import Footer from "./Footer";
import NavBarMain from "./NavBarMain";

const HeaderFooter = ({ children }) => {
  return (
    <div className="body_wrapper">
      <header>
        {" "}
        <NavBarMain></NavBarMain>
      </header>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HeaderFooter;
