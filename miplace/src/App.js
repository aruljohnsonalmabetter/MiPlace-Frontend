//navbar 
//basic structure
//

import './App.css';
import Testimonial from './components/Testimonial.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline"> 
         Hello world!
        </h1>

        <Testimonial/>
      </header>
    </div>
  );
}

export default App;
