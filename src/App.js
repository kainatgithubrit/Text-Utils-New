
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 const[alert ,setAlert]=useState(null);

 const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type,
  })
 };
  return (
    <>
   
   {/* <Router> */}
      <Navbar />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
    <TextForm heading="Enter your text" />
      
        {/* </Routes> */}
      </div>
    {/* </Router> */}

    </>
   
  );
}

export default App;
