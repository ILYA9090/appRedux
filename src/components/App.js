import React from "react";
import UserContext from "./Context/context";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppRouter from "./AppRouter/AppRouter";
import { useState } from "react";
const App = () => {
  const [authorization, setAuthorization] = useState(null);
  return (
    <UserContext.Provider value={{ authorization, setAuthorization }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
