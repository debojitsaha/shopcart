import { Button, Flex, Grid } from "@chakra-ui/react";
import appContext from "../../contextApi/appContext";
import { useContext } from "react";
import { T_Cart } from "../../interfaces/products";
import CartProductCard from "../../components/CartProductCard";
import Empty from "../../utils/Empty";
import CheckoutBox from "../../components/CheckoutBox";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  /* states for adding items to Cart */
  const { cart } = useContext(appContext);
  const navigate = useNavigate();

  return (
    <Grid
      gap={"12px"}
      gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
      alignItems={"flex-start"}
      padding={"12px"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} gap={"7px"}>
        {cart.length > 0 ? (
          cart.map((item: T_Cart, i: number) => {
            return <CartProductCard {...item} key={i} />;
          })
        ) : (
          <Empty description={"Your Cart is Empty"} />
        )}
      </Flex>
      {cart.length > 0 && (
        <Flex flexDirection={"column"} gap={"7px"}>
          <CheckoutBox />
          <Grid gap={"12px"} gridTemplateColumns={"repeat(2, 1fr)"}>
              <Button
                variant={"outline"}
                color={"#003D29"}
                borderColor="#015539"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
              <Button
                background={"#003D29"}
                color={"white"}
                _hover={{ background: "#015539" }}
                onClick={() => navigate("/checkout")}
              >
                Place Order
              </Button>
          </Grid>
        </Flex>
      )}
    </Grid>
  );
};

export default Cart;
