React 17'den React 18'e geçiş.
**index.js** dosyası içindeki kodların değişimi
```js script
import React from "react";
//import ReactDOM from "react-dom"; //React 17
import { createRoot } from "react-dom/client"; //React 18
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//React 17 sürümü
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```