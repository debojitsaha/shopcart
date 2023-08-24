import { SimpleGrid } from "@chakra-ui/react";
import { useGetAllProducts } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import "./home.styles.scss";
import Banner from "../../components/Banner";

const Home = () => {
  const allProducts = useGetAllProducts();

  return (
    <div className="home">
      <Banner />
      {allProducts.data?.map((product: T_Products) => {
        return (
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' key={product.id}>
            <ProductCard {...product} />
          </SimpleGrid>
        );
      })}
    </div>
  );
};

export default Home;
