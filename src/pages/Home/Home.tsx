import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useGetAllProducts } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import Banner from "../../components/Banner";
import Loader from "../../utils/Loader";

const Home = () => {
  const allProducts = useGetAllProducts();

  return (
    <>
      <Box padding={"12px"}>
        <Banner />
        <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
          Products for You!
        </Heading>
      </Box>
      <Box padding={"12px"}>
        {!allProducts.isLoading ? (
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {allProducts?.data?.map((product: T_Products) => {
              return <ProductCard {...product} key={product.id} />;
            })}
          </SimpleGrid>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
};

export default Home;
