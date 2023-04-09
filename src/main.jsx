import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [{
            path : "/",
            element : <Home></Home>
        }]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
);
