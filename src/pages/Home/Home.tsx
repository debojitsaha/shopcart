import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetAllProducts } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import Banner from "../../components/Banner";
import Loader from "../../utils/Loader";
import { BiFilterAlt } from "react-icons/bi";
import FilterModal from "../../components/FilterModal";
import appContext from "../../contextApi/appContext";
import { useContext } from "react";

const Home = () => {
  const allProducts = useGetAllProducts();
  /* states to handle modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filters } = useContext(appContext);

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Box padding={"12px"}>
        <Banner />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
            Products for You!
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            cursor={"pointer"}
            onClick={onOpen}
          >
            <Text fontWeight={600} fontSize={"lg"}>
              Filters
            </Text>
            <BiFilterAlt size="25px" />
          </Box>
        </Box>
      </Box>
      <Box padding={"12px"}>
        {!allProducts.isLoading ? (
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {allProducts?.data
              ?.filter((product) => {
                return (
                  product.price >= filters.price.min &&
                  product.price <= filters.price.max &&
                  product.rating.rate >= filters.rating.min &&
                  product.rating.rate <= filters.rating.max
                );
              })
              .map((product: T_Products) => {
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
