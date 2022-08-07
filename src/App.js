import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/navbar';
import Home from '../src/Components/home';
import Footer from '../src/Components/footer';
 import Card from '../src/Components/card';
//  import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Routes>
                 <Route exact path="/card" element={<Card />} />
                </Routes> */}
      <Footer/>
              
     
    </div>
  );
}

export default App;
