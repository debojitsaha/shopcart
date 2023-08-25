import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useGetCategoryProduct } from "../../api/productServices";
import ProductCard from "../../components/ProductCard";
import { T_Products } from "../../interfaces/products";
import { Capitalize } from "../../utils/Capitalize";

const CategoryPage = ({ category }: { category: string }) => {
  const categoryProducts = useGetCategoryProduct(category);

  return (
    <>
      <Box padding={"12px"}>
        <Heading size="lg" justifySelf={"flex-start"} marginTop="6">
          {Capitalize(category)} available at ShopCart!
        </Heading>
      </Box>
      <Box padding={"12px"}>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {categoryProducts.data &&
            categoryProducts.data?.map((product: T_Products) => {
              return <ProductCard {...product} key={product.id} />;
            })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CategoryPage;
