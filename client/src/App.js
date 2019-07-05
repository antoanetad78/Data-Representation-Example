import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import SelectVar from "./components/SelectVar";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">SIMPLE LINE CHART</header>
        <SelectVar />
        <DisplayData />
      </div>
    </Provider>
  );
}

export default App;
