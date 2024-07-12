import React from "react";
import "./App.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
    return (
        <div id="manga-reader-app">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;