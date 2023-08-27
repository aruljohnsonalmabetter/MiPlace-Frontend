
import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
<<<<<<< HEAD
import {Popularplace} from "./components/Popularplace"
//navbar 
=======
//navbar
>>>>>>> cbb206c4d19a3c85cbce80bde41bda93cf022ebe
//basic structure
//

import "./App.css";
import Testimonial from "./components/Testimonial.jsx";

import HomeCard from "./components/HomeCard";

import { MostSearchedLocations } from "./components/MostSearchedLocations";
import { PlaceSearchBarComponent } from "./components/PlaceSearchBarComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeCard />

<<<<<<< HEAD
      <HeaderComponent/>      
      <HomeCard/>

      
      <MostSearchedLocations/>
      <Popularplace/>
        <Testimonial/>
  

      <FooterComponent/>
=======
      <MostSearchedLocations />
      <Testimonial />

      <FooterComponent />
>>>>>>> cbb206c4d19a3c85cbce80bde41bda93cf022ebe
    </div>
  );
}

export default App;
