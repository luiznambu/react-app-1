import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(       //react18 atualizou a forma de render
    document.getElementById("root")     //criar root e dps usar root.render possibilita mais utilizacoes do 'root'
);
root.render(
    <App />
);