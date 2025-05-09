// import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";

// importar estilos generales
import "./index.css";

// Componentes principales
import { App } from "./App";

// NOTA -
// Los componentes siempre deben de ser PascalCase ejemplo PrimerComponente

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
