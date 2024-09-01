import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { 
        path: "/",
        element: <Home /> 
      },
      { 
        path: "/about",
        element: <About /> 
      },
      { 
        path: "/services",
        element: <Services /> 
      },
      { 
        path: "/blog",
        element: <Blog /> 
      },
      { 
        path: "/contact",
        element: <Contact /> 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
