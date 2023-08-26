import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetCategoryProduct } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { Capitalize } from "../../utils/modifyWords";
import Loader from "../../utils/Loader";
import FilterModal from "../../components/FilterModal";
import { useContext, useEffect, useState } from "react";
import appContext from "../../contextApi/appContext";
import { BiFilterAlt, BiSort } from "react-icons/bi";
import { T_Products } from "../../interfaces/products";

const CategoryPage = ({ category }: { category: string }) => {
  const products = useGetCategoryProduct(category);

  const [categoryProducts, setCategoryProducts] = useState(products);

  /* states to handle modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* states for price range & rating filters */
  const { filters } = useContext(appContext);

  const handleSort = (sort: string) => {
    if (sort === "asc") {
      products.data?.sort((a: T_Products, b: T_Products) => a.price - b.price);
    } else {
      products.data?.sort((a: T_Products, b: T_Products) => b.price - a.price);
    }
  };

  useEffect(() => {
    setCategoryProducts(products);
  }, [products]);

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Box
        display="flex"
        flexDirection={{md:"row",base:"column-reverse"}}
        justifyContent="space-between"
        alignItems={{md:"center",base:"flex-start"}}
        padding={"12px"}
      >
        <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
          {Capitalize(category)} for You!
        </Heading>
        <Box display="flex" gap={"12px"} alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            cursor={"pointer"}
            onClick={onOpen}
            as={Button}
          >
            <Text fontWeight={600} fontSize={"lg"}>
              Filters
            </Text>
            <BiFilterAlt size="25px" />
          </Box>
          <Box display="flex" alignItems="center" cursor={"pointer"}>
            <Menu>
              <MenuButton as={Button} rightIcon={<BiSort size="25px" />}>
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleSort("asc")}>
                  Price Low to High
                </MenuItem>
                <MenuItem onClick={() => handleSort("desc")}>
                  Price High to Low
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Box padding={"12px"}>
        {!categoryProducts.isLoading ? (
          <SimpleGrid
            spacing={4}
            templateColumns={{
              md: "repeat(auto-fill, minmax(350px, 1fr))",
              base: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
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
