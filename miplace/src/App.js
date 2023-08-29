import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import {Popularplace} from "./components/Popularplace"


import "./App.css";
import Testimonial from "./components/Testimonial.jsx";

import HomeCard from "./components/HomeCard";

import { MostSearchedLocations } from "./components/MostSearchedLocations";
// import { PlaceSearchBarComponent } from "./components/PlaceSearchBarComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeCard />

      

      
      <MostSearchedLocations/>
      <p className=" text-start text-2xl font-bold">Popular Places</p>
      <Popularplace/>
        <Testimonial/>
  

      <FooterComponent/>
    </div>
  );
}

export default App;
