import { Grid, Flex, Button, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import CheckoutBox from "../../components/CheckoutBox";
import appContext from "../../contextApi/appContext";
import CheckoutForm from "./components/CheckoutForm";
import Empty from "../../utils/Empty";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./components/PaymentForm";

const Checkout = () => {
  const { cart, setCart } = useContext(appContext);
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Grid
      gap={"12px"}
      gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
      alignItems={"flex-start"}
      padding={"12px"}
      justifyContent={"space-between"}
    >
      {cart.length > 0 ? (
        <Flex
          flexDirection={"column"}
          gap={"7px"}
          borderRadius={"4px"}
          boxShadow={"1px 3px 8px 1px #e2e8f0"}
          padding={"16px"}
        >
          <CheckoutForm />
          <PaymentForm />
        </Flex>
      ) : (
        <Empty description={"Your Cart is Empty"} />
      )}
      {cart.length > 0 && (
        <Flex flexDirection={"column"} gap={"7px"}>
          <CheckoutBox />
          <Flex alignItems={"center"} gap={"7px"} justifyContent={"flex-end"}>
            <Button
              variant={"outline"}
              color={"003D29"}
              _hover={{ borderColor: "#015539" }}
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </Button>
            <Button
              background={"#003D29"}
              color={"white"}
              _hover={{ background: "#015539" }}
              onClick={() => {
                navigate("/");
                toast({
                  title: "Order Placed",
                  description:
                    "We've received your order. A tracking link will be sent to your email.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "top",
                });
                setCart([]);
              }}
            >
              Pay Now
            </Button>
          </Flex>
        </Flex>
      )}
    </Grid>
  );
};

export default Checkout;
