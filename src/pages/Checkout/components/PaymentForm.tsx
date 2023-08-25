import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Heading,
  Divider,
} from "@chakra-ui/react";

const PaymentForm = () => {
  return (
    <>
      <Divider my={4} />
      <Heading size={"md"}>Payment Details</Heading>
      <FormControl isRequired>
        <FormLabel>Card Number</FormLabel>
        <Input type="number" />
      </FormControl>
      <Grid
        gap={"12px"}
        gridTemplateColumns={"repeat(auto-fit, minmax(10px, 1fr))"}
      >
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Card Name</FormLabel>
            <Input type="name" />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel>CVV</FormLabel>
            <Input type="password" />
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
};

export default PaymentForm;
