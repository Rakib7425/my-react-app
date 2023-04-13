import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
   return (
      <>
         <Router>
            <div className=''>
               <Navbar />
               <Routes>
                  <Route path='/' element={<Form />} />
                  <Route path='about' element={<About />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='contacts' element={<Contacts />} />
               </Routes>
            </div>
         </Router>
      </>
   );
}

export default App;
