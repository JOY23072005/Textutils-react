import './App.css';

import Navbar from "./components/Navbar.js";
import Textform from "./components/textform.js";
import Alerts from "./components/Alert.js";
import About from "./components/About.js";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setmode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor="#212029";
      showAlert("Dark Mode Enabled!","success");
      return;
    }
    document.body.style.backgroundColor="white";
    setmode("light");
    showAlert("Light Mode Enabled!","success");
  }
  return (//JSX->HTML(in mask of js)
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alerts alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<Textform heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
