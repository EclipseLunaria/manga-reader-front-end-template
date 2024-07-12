import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";
import Layout from "./Components/Layout";
import MangaSearchPage from "./Pages/MangaSearchPage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "search",
                    element: <MangaSearchPage />
                }
            ]
        }
    ]
);
