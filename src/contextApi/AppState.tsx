import { useState } from "react";
import { T_Filters } from "../interfaces/products";
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

  return (
    <AppContext.Provider
      value={{
        // pass your states here
        filters,
        setFilters,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
