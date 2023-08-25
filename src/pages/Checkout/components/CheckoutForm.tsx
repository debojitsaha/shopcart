import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Textarea,
  Heading,
} from "@chakra-ui/react";

const CheckoutForm = () => {
  return (
    <>
    <Heading size={"md"}>Delivery Address</Heading>
      <Grid
        gap={"12px"}
        gridTemplateColumns={"repeat(auto-fit, minmax(10px, 1fr))"}
      >
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="name" />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
        </GridItem>
      </Grid>
      <Grid
        gap={"12px"}
        gridTemplateColumns={"repeat(auto-fit, minmax(10px, 1fr))"}
      >
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="phone" />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Optional Phone Number</FormLabel>
            <Input type="phone" />
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Textarea />
      </FormControl>
      <Grid
        gap={"12px"}
        gridTemplateColumns={"repeat(auto-fit, minmax(10px, 1fr))"}
      >
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Landmark</FormLabel>
            <Input type="landmark" />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Pincode</FormLabel>
            <Input type="pincode" />
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
};

export default CheckoutForm;
