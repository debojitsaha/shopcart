import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useGetAllProducts } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import Banner from "../../components/Banner";

import "./home.styles.scss";

const Home = () => {
  const allProducts = useGetAllProducts();

  return (
    <>
      <div style={{ padding: "12px" }}>
        <Banner />
        <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
          Products available at ShopCart!
        </Heading>
      </div>
      <div className="home">
        {allProducts.data?.map((product: T_Products) => {
          return (
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              key={product.id}
            >
              <ProductCard {...product} />
            </SimpleGrid>
          );
        })}
      </div>
    </>
  );
};

export default Home;
