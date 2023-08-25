import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Image,
  Text,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { T_Cart, T_Products } from "../interfaces/products";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import appContext from "../contextApi/appContext";

const CartProductCard = (item: T_Cart) => {
  /* to modify items of Cart */
  const { cart, setCart } = useContext(appContext);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      padding={"12px"}
      mb={"4px"}
      boxShadow={"1px 3px 8px 1px #e2e8f0"}
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "200px" }}
        src={item.image}
        alt={item.title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{item.title}</Heading>

          <Text py="2">
            {item.description.length > 100
              ? item.description.slice(0, 100) + "..."
              : item.description}
          </Text>

          <Text color="#003D29" fontSize="2xl" fontWeight={600}>
            ${item.price}
          </Text>
        </CardBody>

        <CardFooter
          gap={"7px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} gap={"4px"}>
            <IconButton
              variant={"outline"}
              aria-label="Decrement product quantity"
              icon={<AiOutlineMinus />}
              isDisabled={item.quantity === 1 ? true : false}
              onClick={() =>
                setCart(
                  cart.map((cartItem: T_Cart) =>
                    cartItem.id === item.id
                      ? {
                          ...cartItem,
                          quantity: cartItem.quantity - 1,
                          totalPrice: cartItem.price * cartItem.quantity,
                        }
                      : cartItem
                  )
                )
              }
            />
            <IconButton
              variant={"outline"}
              aria-label="product quantity"
              icon={<Box fontWeight={600}>{item.quantity}</Box>}
            />
            <IconButton
              variant={"outline"}
              aria-label="Increment product quantity"
              icon={<AiOutlinePlus />}
              onClick={() =>
                setCart(
                  cart.map((cartItem: T_Cart) =>
                    cartItem.id === item.id
                      ? {
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                          totalPrice: cartItem.price * cartItem.quantity,
                        }
                      : cartItem
                  )
                )
              }
            />
          </Flex>
          <IconButton
            colorScheme="red"
            aria-label="Remove product from cart"
            icon={<AiOutlineDelete />}
            onClick={() => {
              setCart(
                cart.filter((cartItem: T_Products) => cartItem.id !== item.id)
              );
            }}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartProductCard;
