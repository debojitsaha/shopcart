import "./App.css";
import AppState from "./contextApi/AppState";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loader from "./utils/Loader";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppState>
          <ChakraProvider>
            <Navbar />
            <RouterProvider router={router} fallbackElement={<Loader />} />
          </ChakraProvider>
        </AppState>
      </QueryClientProvider>
    </>
  );
}

export default App;
