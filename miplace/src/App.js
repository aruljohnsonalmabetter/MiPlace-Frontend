import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <header className="App-header">
       Body
      </header>
      <FooterComponent/>
    </div>
  );
}

export default App;
