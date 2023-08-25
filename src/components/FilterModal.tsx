import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  RangeSliderMark,
  Stack,
  Flex,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import appContext from "../contextApi/appContext";
import { useContext } from "react";

const FilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    mb: "2",
    fontSize: "sm",
    fontWeight: "bold",
  };
  const { filters, setFilters } = useContext(appContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter Products</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Filter by Price */}
          <Text fontWeight={600}>Price Range</Text>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[filters.price.min, filters.price.max]}
            onChangeEnd={(val) => {
              if (val[1] === 100)
                setFilters({ ...filters, price: { min: val[0], max: 10000 } });
              else
                setFilters({ ...filters, price: { min: val[0], max: val[1] } });
            }}
            marginBottom={"24px"}
            marginTop={"8px"}
          >
            <RangeSliderMark value={0} left={0} {...labelStyles}>
              $ 0
            </RangeSliderMark>
            <RangeSliderMark value={50} left={0} {...labelStyles}>
              $ 50
            </RangeSliderMark>
            <RangeSliderMark value={100} left={0} {...labelStyles}>
              $ 100+
            </RangeSliderMark>
            <RangeSliderTrack bg="#94a3b8">
              <RangeSliderFilledTrack bg="#015539" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} bg={"#003d29"} />
            <RangeSliderThumb index={1} bg={"#003d29"} />
          </RangeSlider>

          {/* Filter by Ratings */}
          <Flex alignItems={"center"} gap={"4px"}>
            <Text fontWeight={600}>Ratings</Text>
            <AiFillStar color="#015539" />
          </Flex>
          <RadioGroup
            marginTop={"8px"}
            onChange={(val) => {
              if (val === "4.5")
                setFilters({ ...filters, rating: { min: 4.5, max: 5 } });
              else if (val === "3")
                setFilters({ ...filters, rating: { min: 3, max: 4.5 } });
              else if (val === "1")
                setFilters({ ...filters, rating: { min: 1, max: 3 } });
            }}
          >
            <Stack>
              <Radio value={"4.5"}>
                <Flex alignItems={"center"}>
                  <Text marginLeft="2">4.5 & above</Text>
                </Flex>
              </Radio>
              <Radio value={"3"}>
                <Flex alignItems={"center"}>
                  <Text marginLeft="2">3 - 4.5</Text>
                </Flex>
              </Radio>
              <Radio value={"1"}>
                <Flex alignItems={"center"}>
                  <Text marginLeft="2">1 - 3</Text>
                </Flex>
              </Radio>
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" color={"#003D29"} mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            background={"#003D29"}
            color={"white"}
            _hover={{ background: "#015539" }}
            onClick={() => {
              setFilters({
                price: { min: 0, max: 10000 },
                rating: { min: 1, max: 5 },
              });
              onClose();
            }}
          >
            Reset Filters
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
