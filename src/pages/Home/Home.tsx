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
import { useGetAllProducts } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import Banner from "../../components/Banner";
import Loader from "../../utils/Loader";
import { BiFilterAlt, BiSort } from "react-icons/bi";
import FilterModal from "../../components/FilterModal";
import appContext from "../../contextApi/appContext";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const products = useGetAllProducts();

  const [allProducts, setallProducts] = useState(products);

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
    setallProducts(products);
  }, [products]);

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Box padding={"12px"}>
        <Banner />
        <Box
          display="flex"
          flexDirection={{ md: "row", base: "column-reverse" }}
          justifyContent="space-between"
          alignItems={{ md: "center", base: "flex-start" }}
          padding={"12px"}
        >
          <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
            Products for You!
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
                    Low to High
                  </MenuItem>
                  <MenuItem onClick={() => handleSort("desc")}>
                    High to Low
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding={"12px"}>
        {!allProducts.isLoading ? (
          <SimpleGrid
            spacing={4}
            templateColumns={{
              md: "repeat(auto-fill, minmax(350px, 1fr))",
              base: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {allProducts?.data
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

export default Home;
