import { AxiosResponse } from "axios";
import api from ".";
import { useQuery } from "react-query";
import { T_Products } from "../interfaces/products";

export function useGetAllProducts(){
  return useQuery("products",async()=>{
    const res: AxiosResponse = await api.get("/products");
    return res.data as T_Products[];
  })
}

export function useGetAllCategories(){
  return useQuery("products/categories",async()=>{
    const res: AxiosResponse = await api.get("/products/categories");
    return res.data;
  })
}
