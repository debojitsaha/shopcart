import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import appContext from "../../contextApi/appContext";
import { useContext } from "react";
import { T_Cart } from "../../interfaces/products";
import CartProductCard from "../../components/CartProductCard";
import Empty from "../../utils/Empty";

const Cart = () => {
  /* states for adding items to Cart */
  const { cart } = useContext(appContext);
  console.log(cart);

  return (
    <Grid
      gap={"12px"}
      gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
      alignItems={"flex-start"}
      padding={"12px"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} gap={"7px"}>
        {cart.length > 0 ? (
          cart.map((item: T_Cart, i: number) => {
            return <CartProductCard {...item} key={i} />;
          })
        ) : (
          <Empty description={"Your Cart is Empty"} />
        )}
      </Flex>
      {cart.length > 0 && (
        <GridItem
          flexDirection={"column"}
          padding={"32px"}
          borderRadius={"4px"}
          boxShadow={"1px 3px 8px 1px #e2e8f0"}
        >
          <Heading size={"md"}>Price Details</Heading>
          <Divider my={4} />
          <Stack mt={8}>
            {cart.map((item: T_Cart, i: number) => {
              return (
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  key={i}
                >
                  <Text>
                    {item.title} (x{item.quantity}){" "}
                  </Text>
                  <Text>$ {item.price * item.quantity}</Text>
                </Flex>
              );
            })}
          </Stack>
          <Divider my={4} />
          <Stack mt={8}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"sm"}>Total Items</Heading>
              <Heading size={"sm"}>{cart.length}</Heading>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"sm"}>Total Amount</Heading>
              <Heading size={"sm"}>
                $ {cart.reduce(
                  (sum: number, item: T_Cart) => sum + item.totalPrice,
                  0
                )}
              </Heading>
            </Flex>
          </Stack>
        </GridItem>
      )}
    </Grid>
  );
};

export default Cart;
