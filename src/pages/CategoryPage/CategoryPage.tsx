import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetCategoryProduct } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import { Capitalize } from "../../utils/Capitalize";
import Loader from "../../utils/Loader";
import FilterModal from "../../components/FilterModal";
import { useContext } from "react";
import appContext from "../../contextApi/appContext";
import { BiFilterAlt } from "react-icons/bi";

const CategoryPage = ({ category }: { category: string }) => {
  const categoryProducts = useGetCategoryProduct(category);
  /* states to handle modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* states for price range & rating filters */
  const { filters } = useContext(appContext);

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={"12px"}
      >
        <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
          {Capitalize(category)} for You!
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
      <Box padding={"12px"}>
        {!categoryProducts.isLoading ? (
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {categoryProducts?.data
              ?.filter((product: T_Products) => {
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

export default CategoryPage;
