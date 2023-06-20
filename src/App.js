import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Search } from "./pages/Search";
import { NotFound } from "./pages/NotFound";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Layout
const Layout = () => {
  return (
    <div>
      <Header />
      {/* Children component */}
      <Outlet />
      <Footer />
    </div>
  );
};

// Routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      // If no route matches, render the NotFound page
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
