import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CartProvider } from "./hooks/useCart";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <GlobalStyle />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
