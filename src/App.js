
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import Navbarstyless from "./components_css/Navbarstyle.css"
// import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    {/* <About/> */}
    {/* <Navbar/> */}

    <Form Heading="Enter Your Text"/>
    </>
  );
}

export default App;
