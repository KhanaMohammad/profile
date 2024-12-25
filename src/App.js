// import logo from './logo.svg';
// import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
