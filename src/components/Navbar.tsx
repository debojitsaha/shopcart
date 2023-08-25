import Logo from "../assets/logo.webp";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useGetAllCategories } from "../api/productServices";
import { CapitalizeEachWord } from "../utils/Capitalize";

import "../styles/variables.scss";
import { Link } from "react-router-dom";
import appContext from "../contextApi/appContext";
import { useContext } from "react";

const Navbar = () => {
  const categories = useGetAllCategories();
  /* to get the no. of items in the Cart */
  const { cart } = useContext(appContext);

  return (
    <Flex
      alignItems={"center"}
      padding={"16px"}
      position={"sticky"}
      top={0}
      zIndex={10}
      backgroundColor={"white"}
      border={"1px solid #E2E8F0"}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.05)"}
    >
      {/* Left Nav Items */}
      <Flex alignItems={"center"} gap={"18px"}>
        <Flex fontWeight={600} alignItems={"center"} mr={"4"}>
          <Link to={"/"}>
            <Image src={Logo} alt="Logo" width={"40px"} />
          </Link>
          <Link to={"/"}>
            <Text fontSize={"2xl"}>ShopCart</Text>
          </Link>
        </Flex>
        {categories.data &&
          categories.data.map((category: string, i: number) => {
            return (
              <Link to={`/category/${category}`} key={i}>
                <Box
                  key={i}
                  _hover={{
                    boxShadow: "inset 0 -2px 0 #26283E",
                    cursor: "pointer",
                  }}
                >
                  <Text fontWeight={600}>{CapitalizeEachWord(category)}</Text>
                </Box>
              </Link>
            );
          })}
      </Flex>

      {/* Right Nav Items */}
      <Flex ml={"auto"} gap={"18px"} alignItems={"center"} paddingRight={"6px"}>
        <Link to={"/cart"}>
          <Flex gap={"4px"} alignItems={"center"} position={"relative"}>
            <BsCartCheck size="25px" />
            <Badge
              colorScheme="red"
              variant={"solid"}
              position={"absolute"}
              top={"-8px"}
              left={"12px"}
            >
              {cart.length}
            </Badge>
            <Text fontWeight={600}>Cart</Text>
          </Flex>
        </Link>
        <Menu>
          <MenuButton
            color={"#000000"}
            _hover={{ color: "#26283E", bg: "transparent" }}
            _active={{ bg: "transparent" }}
            bg={"transparent"}
            as={Button}
            p={0}
            cursor={"pointer"}
            leftIcon={<BiUser size="25px" />}
          >
            <Text>Account</Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
