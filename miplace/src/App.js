import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import {Popularplace} from "./components/Popularplace";
//navbar 
//basic structure
//

import './App.css';
import Testimonial from './components/Testimonial.jsx';

function App() {
  return (

    <div className="App">
      <HeaderComponent/>
      <header className="App-header">
       
        <h1 className="text-3xl font-bold underline"> 
         Hello world!
        </h1>
      </header>
      
      <Popularplace/>
      <Testimonial/>
      
      <FooterComponent/>
      

    </div>
  );
}

export default App;
