import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { render } from "react-dom/cjs/react-dom.production.min";
import Header from "./components/Header";

ReactDOM.render(<App />, document.getElementById("root"));
render(<Header />);
