import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { T_Products } from "../interfaces/products";
import "../styles/components/product_card.scss";
import "../styles/variables.scss";

const ProductCard = (item: T_Products) => {
  return (
    <Card maxW="sm">
      <CardBody
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #E2E8F0",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          borderRadius="lg"
          width={"250px"}
          height={"300px"}
          transform={"scale(0.8)"}
          alignSelf="center"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            {item.title.length > 20
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </Heading>
          <Text>
            {item.description
              ? item.description.length > 60
                ? item.description.substring(0, 60) + "..."
                : item.description
              : "No description available for this product."}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ₹ {item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider borderColor="#94a3b8" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
