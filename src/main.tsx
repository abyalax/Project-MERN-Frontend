import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");


if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
