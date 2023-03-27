// modulos
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "semantic-ui-css/semantic.min.css";

// paginas
import { Rutas } from "./components/routes";

// css
import "../src/components/styles/Styles.scss";
// import DetPre from "./views/presentacion/components/DetPre";
// import DetSit from "./views/presentacion/components/DetSit";
// import Explicame from "./views/explicame/Explicame";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Rutas />
    {/* <DetPre /> */}
    {/* <DetSit /> */}
    {/* <Explicame />  <DetPre />*/} {/*<DetSit />*/}
  </BrowserRouter>
);
