import React from "react";
import ReactDOM from "react-dom";

const node = document.createElement("div");
document.body.appendChild(node);

const App = () => <h1>Hello React after change</h1>;

ReactDOM.render(<App />, node);
