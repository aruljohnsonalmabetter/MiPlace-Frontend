import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import {Popularplace} from "./components/Popularplace";
//navbar 
//basic structure
//

import './App.css';
import Testimonial from './components/Testimonial.jsx';

import HomeCard from "./components/HomeCard";

import { MostSearchedLocations } from "./components/MostSearchedLocations";

function App() {
  return (

    <div className="App">
      <HeaderComponent/>
      <header className="App-header">
       Body
        <h1 className="text-3xl font-bold underline"> 
         Hello world!
        </h1>

        <Testimonial/>
      </header>
      <FooterComponent/>
      

    </div>
  );
}

export default App;
