import "./App.css";
import HeaderFooter from "./components/HeaderFooter";
import SignupPage from "./components/authComps/SignupPage";
import LoginPage from "./components/authComps/LoginPage";
import CompanyPage from "./components/maincomps/CompanyPage";
import ContactPage from "./components/maincomps/ContactPage";
import LibraryPage from "./components/maincomps/LibraryPage";

function App() {
  return (
    <>
      {/* <HeaderFooter>
        <CompanyPage></CompanyPage>
        <ContactPage></ContactPage>
        <LibraryPage></LibraryPage>
      </HeaderFooter> */}
      <SignupPage></SignupPage>
      {/* <LoginPage></LoginPage> */}
      {/* <Simulator></Simulator> */}
    </>
  );
}

export default App;
