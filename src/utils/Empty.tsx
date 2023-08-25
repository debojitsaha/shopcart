import { Button, Flex, Image, Text } from "@chakra-ui/react";
import empty from "../assets/empty.png";
import { useNavigate } from "react-router-dom";

const Empty = ({ description }: { description: string }) => {
    const navigate= useNavigate()
  return (
    <Flex flexDirection={"column"} alignSelf={"center"} margin={"auto"} alignItems={"center"}>
      <Image src={empty} alt={"empty"} width={{ base: "300px", md: "500px" }} />
      <Text fontWeight={600}>{description}</Text>
      <Button
        background={"#003D29"}
        color={"white"}
        _hover={{ background: "#015539" }}
        onClick={() => navigate("/")}
      >
        Buy Something
      </Button>
    </Flex>
  );
};

export default Empty;
