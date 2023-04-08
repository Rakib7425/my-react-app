
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import Navbarstyless from "./components_css/Navbarstyle.css"

function App() {
  return (
    <>
    <Navbar title="TextUtlis" aboutItem="About Us"/>
    {/* <Navbar/> */}
    <Form Heading="Enter Your Text"/>
    </>
  );
}

export default App;
