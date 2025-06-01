import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {
 BrowserRouter as Router, 
 Routes,
 Route
} from "react-router-dom";

function App() {
  // const Object={
  //   title:"juf",
  //   aboutText:"bjg"
  // }

const [mode, setMode] = useState('light'); 
const [alert, setalert] = useState(null);
// const [color, setcolor] = useState('white');


const  toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode has been enabled.","success");
    document.title='TextUtils-DarkMode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled.","success");
     document.title='TextUtils-LightMode'
  } 
}

const showAlert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(()=>{
setalert(null);
},1500);
}

// const changeBlue=()=>{
//   setcolor('blue');
//   document.body.style.backgroundColor='blue';
//   showAlert("Blue Mode has been enabled.","success");
// }

// const changePink=()=>{
//     setcolor('pink');
//     document.body.style.backgroundColor='pink';
//     showAlert("Pink mode has been enabled.","success");
// }

  return (
    <>
     {/* <Navbar props={
      Object
    }/>  */}
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}  showAlert={showAlert} /> 
    <Alert alert={alert} />
    <div className="container">
    <Routes>
          
          <Route path="/" element={<TextForm value="Try TextUtils-Word Counter | LowerCase to Uppercase | UpperCase to LowerCase" showAlert={showAlert} btn1="Convert to Uppercase" btn2="Convert to Lowercase" mode={mode}/>} />
          <Route path="/about" element={<About  mode={mode}/>} />

          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;