import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { useState } from "react";


function App() {
  const [isAdVisible, setIsAdVisible] = useState(true);

  const closeAd = () => {
    setIsAdVisible(false);
  };
  return (
    <div className="">
       {isAdVisible && (
        <div className="ad-banner">
          <span className="ad-content">Sign up and get 20% off to your first order. <a href="/">Sign Up Now </a></span>
          <span className="ad-close" onClick={closeAd}>&times;</span>
        </div>
      )}
      
    <div className="app">
    <Navbar/>
    </div>
    </div>
  );
}

export default App;
