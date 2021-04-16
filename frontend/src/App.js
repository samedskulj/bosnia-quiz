import Navigacija from "./components/Navigacija";
import OpisKviza from "./components/OpisKviza";
import PočetnaStranica from "./PočetnaStranica";
import { createStore } from "redux";
import { generalnoZnanje } from "./redux/GeneralnoZnanje";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { sport } from "./redux/Sport";

const initialStore = {
  pitanjeZnanje: generalnoZnanje,
  pitanjeSport: sport,
  ukupno: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <PočetnaStranica></PočetnaStranica>
    </Provider>
  );
}

export default App;
