import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import BannerImage from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Box
      backgroundColor={"#fbf0e4"}
      display={"flex"}
      justifyContent={{ md: "space-between", base: "center" }}
      alignItems={"center"}
      flexDirection={{ md: "row", base: "column-reverse" }}
      borderRadius={"10px"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"12px"}
        padding={"14"}
      >
        <Heading as="h2" size="xl" color="#003D29" mt={{ base: "5", md: "10" }}>
          Welcome to the store
        </Heading>
        <Text
          color="#003D29"
          fontSize={{ base: "xl", md: "2xl" }}
          mt={{ base: "2", md: "3" }}
        >
          Get the best products at the best prices at ShopCart.
        </Text>
        <Button
          background={"#003D29"}
          color={"white"}
          borderRadius={"24px"}
          _hover={{ background: "#015539" }}
          onClick={() => {
            navigate("/product/1");
          }}
        >
          Buy Now
        </Button>
      </Box>
      <Box padding={"14px"}>
        <Image src={BannerImage} alt="Banner" />
      </Box>
    </Box>
  );
};

export default Banner;
