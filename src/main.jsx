import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage, { loader as CategoryLoader } from "./pages/CategoryPage";
import ProductPage, { loader as ProductPageLoader } from "./pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import RootLayout from "./components/RootLayout";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage, {
  loader as dashboardProtectedLoader,
} from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/headphones",
        children: [
          {
            index: true,
            element: <CategoryPage title="headphones" />,
            loader: CategoryLoader,
          },
          { path: ":id", element: <ProductPage />, loader: ProductPageLoader },
        ],
      },
      {
        path: "/speakers",
        children: [
          {
            index: true,
            element: <CategoryPage title="speakers" />,
            loader: CategoryLoader,
          },
          { path: ":id", element: <ProductPage />, loader: ProductPageLoader },
        ],
      },
      {
        path: "/earphones",
        children: [
          {
            index: true,
            element: <CategoryPage title="earphones" />,
            loader: CategoryLoader,
          },
          { path: ":id", element: <ProductPage />, loader: ProductPageLoader },
        ],
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        loader: dashboardProtectedLoader,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router}></RouterProvider>
  </CartProvider>
);
