import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.js";
import store from "./slices/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Pages/Loader.jsx";
import { persistor } from "./slices/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Оборачиваем приложение в Provider и передаем хранилище в него
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
