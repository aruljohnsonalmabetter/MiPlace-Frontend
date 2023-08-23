import "./App.css";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <header className="App-header">
        <h1 className="text-2xl  text-orange-600	">
        <p>Hello lets start our miplace</p>
        </h1>
      </header>
      <FooterComponent/>
    </div>
  );
}

export default App;
