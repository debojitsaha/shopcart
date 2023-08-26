import {
  Avatar,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { T_Products } from "../../interfaces/products";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appContext from "../../contextApi/appContext";
import { useGetSpecificProduct } from "../../api/productServices";
import Loader from "../../utils/Loader";
import Logo from "../../assets/logo.webp";

const Product = () => {
  /* states for adding items to Cart */
  const { cart, setCart } = useContext(appContext);
  /* check if the item is already added to cart*/
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const navigate = useNavigate();

  const itemId = useParams().id;
  const item: T_Products | undefined = useGetSpecificProduct(itemId).data;

  return (
    <>
      {item ? (
        <Grid
          gap={"12px"}
          gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
          alignItems={"flex-start"}
          padding={"12px"}
          justifyContent={"space-between"}
        >
          {/* Image Side */}
          <Flex flexDirection={"column"}>
            <Flex
              flexDirection={"column"}
              gap={"20px"}
              borderRadius={"4px"}
              boxShadow={"1px 3px 8px 1px #e2e8f0"}
              padding={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={item.image}
                alt={item.title}
                maxWidth={"300px"}
                objectFit={"contain"}
              />
            </Flex>
            <Grid
              marginY={"12px"}
              gap={"12px"}
              gridTemplateColumns={"repeat(auto-fit, minmax(300px, 2fr))"}
            >
              <Button
                background={"#003D29"}
                color={"white"}
                _hover={{ background: "#015539" }}
                onClick={() => {
                  setCart([
                    ...cart,
                    { ...item, quantity: 1, totalPrice: item.price },
                  ]);
                  navigate("/checkout");
                }}
              >
                Buy Now for ${item.price}
              </Button>
              {!itemAdded ? (
                <Button
                  variant="outline"
                  color={"#003D29"}
                  onClick={() => {
                    setCart([
                      ...cart,
                      { ...item, quantity: 1, totalPrice: item.price },
                    ]);
                    setItemAdded(true);
                  }}
                  borderColor= "#015539"
                >
                  Add to cart
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  color={"#003D29"}
                  borderRadius={"24px"}
                  leftIcon={<AiOutlineCheck />}
                >
                  Item Added to Cart
                </Button>
              )}
            </Grid>
          </Flex>

          {/* Product Info */}
          <Flex
            flexDirection={"column"}
            gap={"16px"}
            borderRadius={"4px"}
            boxShadow={"1px 3px 8px 1px #e2e8f0"}
            padding={"16px"}
          >
            <Heading
              size={{ base: "md", md: "lg" }}
              _hover={{ textDecor: "underline", cursor: "pointer" }}
            >
              {item.title}
            </Heading>
            <Text color={"#475569"} fontSize={{ base: "sm", md: "md" }}>
              {item.description
                ? item.description
                : "No description available for this product."}
            </Text>
            <Flex gap={"7px"} alignItems={"center"} flexWrap={"wrap"}>
              <Tag
                background={"#d0fef0"}
                fontWeight={600}
                variant={"solid"}
                backgroundColor={"#015539"}
              >
                <Text color="white">{item.rating.rate}</Text>
                <AiFillStar
                  color="white"
                  style={{ marginLeft: "4px", marginRight: "4px" }}
                />
              </Tag>
              <Text color="#64748b" fontWeight={600}>
                {item.rating.count} ratings
              </Text>
              <Tag
                size="lg"
                colorScheme="cyan"
                borderRadius="full"
                fontWeight={600}
              >
                <Avatar src={Logo} size="xs" name="ShopCart" ml={-1} mr={2} />
                <TagLabel color={"#003d29"}>ShopCart assured</TagLabel>
              </Tag>
            </Flex>
          </Flex>
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Product;
