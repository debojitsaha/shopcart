import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      margin="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginY={"60px"}
    />
  );
};

export default Loader;
