import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import BannerImage from "../assets/banner.jpg";

const Banner = () => {
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
        <Heading as="h2" size="2xl" color="#003D29" mt="10">
          Welcome to the store
        </Heading>
        <Text color="#003D29" fontSize="2xl">
          Get the best products at the best prices at ShopCart.
        </Text>
        <Button
          background={"#003D29"}
          color={"white"}
          borderRadius={"24px"}
          _hover={{ background: "#015539" }}
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
