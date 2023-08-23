import Logo from "../assets/logo.webp";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsCartCheck, BsChevronDown } from "react-icons/bs";
import { BiSearchAlt, BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <Flex alignItems={"center"} padding={"8px"}>
      {/* Left Nav Items */}
      <Flex alignItems={"center"} gap={"12px"}>
        <Flex fontWeight={600} alignItems={"center"} mr={"4"}>
          <Image src={Logo} alt="Logo" width={"40px"} />
          <Text fontSize={"2xl"}>ShopCart</Text>
        </Flex>
        <Box>
          <Menu>
            <MenuButton
              color={"#000000"}
              _hover={{ color: "#26283E", bg: "transparent" }}
              _active={{ bg: "transparent" }}
              bg={"transparent"}
              as={Button}
              p={0}
              cursor={"pointer"}
              rightIcon={<BsChevronDown />}
            >
              <Text>Categories</Text>
            </MenuButton>
            <MenuList>
              <MenuItem>Men</MenuItem>
              <MenuItem>Women</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Text fontWeight={600}>Deals</Text>
        </Box>
      </Flex>

      {/* Mid Nav Items */}
      <Box ml={"auto"}>
        <InputGroup>
          <Input placeholder="Search.." />
          <InputRightAddon children={<BiSearchAlt />} />
        </InputGroup>
      </Box>

      {/* Right Nav Items */}
      <Flex ml={"auto"} gap={"12px"} alignItems={"center"}>
        <Flex gap={"4px"} alignItems={"center"}>
          <BsCartCheck size="25px" />
          <Text fontWeight={600}>Cart</Text>
        </Flex>
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
