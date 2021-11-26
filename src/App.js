import React from "react";
import MyRoutes from "./Routes";
import { BrowserRouter } from 'react-router-dom'
import Headers from "./components/headers/Headers";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Headers />
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
