import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
//navbar
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

      <MostSearchedLocations />
      <Testimonial />

      <FooterComponent />
    </div>
  );
}

export default App;
