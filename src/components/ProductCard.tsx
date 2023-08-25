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
  Flex,
  Tag,
} from "@chakra-ui/react";
import { T_Products } from "../interfaces/products";
import "../styles/variables.scss";
import { AiFillStar } from "react-icons/ai";

const ProductCard = (item: T_Products) => {
  return (
    <Card
      _hover={{
        boxShadow: "1px 3px 8px 1px #94a3b8",
      }}
    >
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
          _hover={{ transform: "scale(1)" }}
        />
        <Stack mt="6" spacing="3">
          <Flex alignItems={"center"} gap={"4px"}>
            <Tag background={"#d0fef0"} fontWeight={600}>
              <Text>{item.rating.rate}</Text>{" "}
              <AiFillStar
                color="#015539"
                style={{ marginLeft: "4px", marginRight: "4px" }}
              />
              <Text> | {item.rating.count}</Text>
            </Tag>
          </Flex>
          <Heading
            size="md"
            _hover={{ textDecor: "underline", cursor: "pointer" }}
          >
            {item.title.length > 20
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </Heading>
          <Text color={"#475569"}>
            {item.description
              ? item.description.length > 60
                ? item.description.substring(0, 60) + "..."
                : item.description
              : "No description available for this product."}
          </Text>
          <Text color="#003D29" fontSize="2xl" fontWeight={600}>
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider borderColor="#f1f5f9" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            background={"#003D29"}
            color={"white"}
            borderRadius={"24px"}
            _hover={{ background: "#015539" }}
          >
            Buy Now
          </Button>
          <Button variant="ghost" color={"#003D29"} borderRadius={"24px"}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
