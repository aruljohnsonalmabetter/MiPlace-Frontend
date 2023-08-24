import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
//navbar 
//basic structure
//

import './App.css';
import Testimonial from './components/Testimonial.jsx';
import { MostSearchedLocations } from "./components/MostSearchedLocations";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      {/* <header className="App-header"> */}
      <h1>Header</h1>
      <MostSearchedLocations/>
        <Testimonial/>
      {/* </header> */}
      <FooterComponent/>
    </div>
  );
}

export default App;
