import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/navbar';
import Home from '../src/Components/home';
import Footer from '../src/Components/footer';
 import Card from '../src/Components/card';
 import EatWell from "./Components/eatwell";
 import Detail from "./Components/detail";
 import Picture from "./Components/picture";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/EatWell" element={<EatWell />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
        <Route path="/Picture" element={<Picture />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
