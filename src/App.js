
import Portfolio from "./components/basics/Portfolio/Portfolio.js";
import Skills from "./components/basics/Skills/Skills.js";
import Work from "./components/basics/Work/Work.js";
import Contact from "./components/basics/Contact/Contact.js";
import About from "./components/basics/About/About.js";
import "./App.scss"
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/basics/Layout/Layout.js";



function App() {
  return (
  <>

<Router>
<Layout/>

   <Routes>
                       
     <Route path="/" element={ <Portfolio/>}  />
     <Route path="/about"  element={ <About/>}  />
     <Route path="/skills"  element={ <Skills/>}  />
     <Route path="/work"  element={<Work/>}  />
     <Route path="/contact"  element={<Contact/>}  />
      
      
</Routes>
</Router>


</>

  
 
  );
}

export default App;
