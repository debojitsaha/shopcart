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
import { CapitalizeEachWord, separateWords } from "../utils/modifyWords";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/variables.scss";
import { Link, useLocation } from "react-router-dom";
import appContext from "../contextApi/appContext";
import { useContext } from "react";

const Navbar = () => {
  const categories = useGetAllCategories();
  /* to get the no. of items in the Cart */
  const { cart } = useContext(appContext);
  /* to get the current location */
  const location = useLocation();

  return (
    <Flex
      alignItems={"center"}
      padding={{ md: "16px", base: "8px" }}
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
            <Image
              src={Logo}
              alt="Logo"
              width={"40px"}
              display={{ lg: "block", base: "none" }}
            />
          </Link>
          <Link to={"/"}>
            <Text fontSize={"2xl"}>ShopCart</Text>
          </Link>
        </Flex>
        <Link
          to={"/"}
          className={separateWords(location.pathname) === "/" ? "active" : ""}
        >
          <Text fontWeight={600}>Home</Text>
        </Link>
        {categories.data &&
          categories.data.map((category: string, i: number) => {
            return (
              <Link
                to={`/category/${category}`}
                key={i}
                className={
                  separateWords(location.pathname) === `/category/${category}`
                    ? "active"
                    : ""
                }
              >
                <Box
                  display={{ base: "none", lg: "block" }}
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
      <Flex
        ml={"auto"}
        gap={{ md: "18px", base: "8px" }}
        alignItems={"center"}
        paddingRight={"6px"}
      >
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
            display={{ md: "inherit", base: "none" }}
          >
            <Text>Account</Text>
          </MenuButton>
          <MenuList>
            <MenuItem as={Button}>Register/Login</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            color={"#000000"}
            _hover={{ color: "#26283E", bg: "transparent" }}
            _active={{ bg: "transparent" }}
            bg={"transparent"}
            as={Button}
            p={0}
            cursor={"pointer"}
            display={{ lg: "none", base: "block" }}
          >
            <RxHamburgerMenu size="25px" />
          </MenuButton>
          <MenuList>
            {categories.data &&
              categories.data.map((category: string, i: number) => {
                return (
                  <MenuItem key={i}>
                    <Link to={`/category/${category}`}>
                      <Text fontWeight={600}>
                        {CapitalizeEachWord(category)}
                      </Text>
                    </Link>
                  </MenuItem>
                );
              })}
            <MenuItem display={{ md: "none", base: "block" }}>
              <Text fontWeight={600}>Profile</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
