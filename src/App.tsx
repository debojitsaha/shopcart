import "./App.css";
import AppState from "./contextApi/AppState";
import { ChakraProvider } from "@chakra-ui/react";
import { RouteObject, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product/Product";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/jewelery",
      element: <CategoryPage category="jewelery" />,
    },
    {
      path: "/category/electronics",
      element: <CategoryPage category="electronics" />,
    },
    {
      path: "/category/men's clothing",
      element: <CategoryPage category="men's clothing" />,
    },
    {
      path: "/category/women's clothing",
      element: <CategoryPage category="women's clothing" />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppState>
          <ChakraProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                {routes.map((route: RouteObject, i: number) => {
                  return (
                    <Route
                      key={i}
                      path={route.path}
                      element={route.element}
                    ></Route>
                  );
                })}
              </Routes>
            </BrowserRouter>
          </ChakraProvider>
        </AppState>
      </QueryClientProvider>
    </>
  );
}

export default App;
