import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// new links to add
// events
// FAQs
// contact
// news
// gallery
