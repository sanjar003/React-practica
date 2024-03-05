import "./App.css";
import Count from "./components/Count";
import Slojnyi from "./components/Slojnyi";
import Chetnyi from "./components/Chetnyi"
import Password from "./Password";
import Random from "./components/Random"
import Numbers from "./components/Numbers"


function App() {
  return (
    <div className="App">
      <Count/>
      <Slojnyi />
      <Chetnyi/>
      <Password/>
      <Random/>
      <Numbers/>
    </div>

  );
}

export default App;
