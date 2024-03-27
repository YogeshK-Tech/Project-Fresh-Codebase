import "./App.css";
import HeaderFooter from "./components/HeaderFooter";
import SignupPage from "./components/inheritingcomps/SignupPage";
import LoginPage from "./components/inheritingcomps/LoginPage";
import Simulator from "./components/Simulator";

function App() {
  return (
    <>
      {/* <HeaderFooter>Hello</HeaderFooter>
      <SignupPage></SignupPage>
      <LoginPage></LoginPage> */}
      <Simulator></Simulator>
    </>
  );
}

export default App;
