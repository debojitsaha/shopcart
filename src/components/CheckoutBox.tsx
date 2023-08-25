import {
  GridItem,
  Heading,
  Divider,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { T_Cart } from "../interfaces/products";
import appContext from "../contextApi/appContext";
import { useContext } from "react";

const CheckoutBox = () => {
  const { cart } = useContext(appContext);

  return (
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
              gap={"7px"}
              key={i}
            >
              <Text>
                {item.title} (x{item.quantity})
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
            ${" "}
            {cart.reduce(
              (sum: number, item: T_Cart) => sum + item.totalPrice,
              0
            )}
          </Heading>
        </Flex>
      </Stack>
    </GridItem>
  );
};

export default CheckoutBox;
