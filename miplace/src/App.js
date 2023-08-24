import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
//navbar 
//basic structure
//

import './App.css';
import Testimonial from './components/Testimonial.jsx';
import HomeCard from "./components/HomeCard";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>      
      <HomeCard/>
      <Testimonial/>
      <FooterComponent/>
    </div>
  );
}

export default App;
