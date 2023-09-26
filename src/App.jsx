import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "confirmation",
    element: <Confirmation />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
