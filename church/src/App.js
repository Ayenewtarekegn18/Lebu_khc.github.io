
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Youth from "./components/Youth";
import Blog from "./components/Blog";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
 return (
 <div>
  <Router>
    <Header/> 
        <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Youth" element={<Youth />} />
        </Routes>
  </Router> 
  
 </div>

  );
};

export default App;
