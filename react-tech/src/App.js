//import {useState} from "react";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import ThirdComponent from "./Components/ThirdComponent";
import './App.css';


const App = () => {
  //const [sign, setSign] = useState();

  return (
    <div className="App">
      <h1>Some test</h1>
      <FirstComponent />
      <br/>
      <SecondComponent />
      <br/>
      <ThirdComponent />
    </div>
  );
}

export default App;
