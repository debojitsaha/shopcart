import { useState } from "react";
import { T_Cart, T_Filters } from "../interfaces/products";
import AppContext from "./appContext";

const AppState = (props: any) => {
  // declare your states here
  const [filters, setFilters] = useState<T_Filters>({
    price: {
      min: 0,
      max: 10000,
    },
    rating: {
      min: 1,
      max: 5,
    },
  });
  const [cart, setCart] = useState<T_Cart[]>([]);

  return (
    <AppContext.Provider
      value={{
        // pass your states here
        filters,
        setFilters,
        cart,
        setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
