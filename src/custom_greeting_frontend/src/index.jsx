import MyHello from "./MyHello";
import * as React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <MyHello/>
  );
};

render(<App />, document.getElementById("app"));
