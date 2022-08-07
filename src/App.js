import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/navbar';
import Home from '../src/Components/home';
import Banner from '../src/Components/banner';
import Footer from '../src/Components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <Banner/> */}
      <Footer/>
    </div>
  );
}

export default App;
