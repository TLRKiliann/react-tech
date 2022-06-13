import {useState} from "react";
import './App.css';


const App = () => {
  const [sign, setSign] = useState();


  return (
    <div className="App">
      <h1>Hello !</h1>

      <h3>Mon titre</h3>
      <p>Un petit texte</p>
    </div>
  );
}

export default App;
