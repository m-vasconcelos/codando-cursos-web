import React, {Component} from "react";
import './App.css';
import Footer from "./components/Footer";
import Modules from "./components/Modules";
import Presentation from "./components/Presentation";
import Sale from "./components/Sale";


function App() {
  return (
    <div className="App">
      <Presentation/>
      <Modules/>
      <Sale/>
      <Footer/>
    </div>
  )
}

export default App;
