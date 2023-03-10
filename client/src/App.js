import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sell from "./pages/Sell";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/main.css";
import CarTrainToys from "./pages/CarTrainToys";
import LegoToys from "./pages/LegoToys";
import DollSoftToys from "./pages/DollSoftToys";
import AnimalToys from "./pages/AnimalToys";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/animaltoys",
        element: <AnimalToys />,
      },
      {
        path: "/cartraintoys",
        element: <CarTrainToys />,
      },
      {
        path: "/dollsofttoys",
        element: <DollSoftToys />,
      },
      {
        path: "legotoys",
        element: <LegoToys />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
