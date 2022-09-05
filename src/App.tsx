import React from "react";

// LIBRARIES
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import AppRoutes from "./config/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
