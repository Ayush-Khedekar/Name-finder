import "./App.css";
import SerarchInput, { type names } from "./searchContent/SerarchInput";
import data from "./searchContent/IndianNamesData";
import React from "react";

function App() {
  const [input, setInput] = React.useState<names[]>(data);
  return (
    <>
      <SerarchInput inputVal={input}/>
    </>
  );
}

export default App;
