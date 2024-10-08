import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToasterProvider } from "./context/toaster-context";
import routes from "./routes/main";

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");


if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ToasterProvider>
          <RouterProvider router={router} />
        </ToasterProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
