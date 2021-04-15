import Navigacija from "./components/Navigacija";
import OpisKviza from "./components/OpisKviza";
import PočetnaStranica from "./PočetnaStranica";
import { createStore } from "redux";
import { initialStore } from "./GeneralnoZnanje";
function reducer(state, action) {
  console.log(state);
}

const store = createStore(reducer, initialStore);

function App() {
  return (
    <div className="App">
      <PočetnaStranica></PočetnaStranica>
    </div>
  );
}

export default App;
