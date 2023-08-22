import "./App.css";
import AppState from "./contextApi/AppState";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./utils/Loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <AppState>
        <ChakraProvider>
          <RouterProvider
            router={router}
            fallbackElement={<Loader />}
          />
        </ChakraProvider>
      </AppState>
    </>
  );
}

export default App;
