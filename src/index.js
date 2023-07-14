import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/routes/index.jsx";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
