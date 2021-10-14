import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { ProductContextProvider } from "./context/productContext";
import { OrderContextProvider } from "./context/orderContext";
import { AddContextProvider } from "./context/addContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AddContextProvider>
          <ProductContextProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </ProductContextProvider>
        </AddContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
