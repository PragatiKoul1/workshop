import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SingleProduct from "./SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <SingleProduct />
        <Footer />
      </>
    ),
  },
]);
function First() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default First;