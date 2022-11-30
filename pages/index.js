import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Box>
        <Center my={"1rem"}>
          <Heading size={"xl"}>Menu</Heading>
        </Center>
        <Flex justify="center" align={"center"}>
          <Box width={"25%"}>
            <InputGroup
              border={"1px"}
              borderRadius="8px"
              borderColor={"red.200"}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="black.300" />}
              />
              <Input type="text" placeholder="Search Here" />
            </InputGroup>
          </Box>
          <Box width={"25%"} mx="1rem">
            <Select
              border={"1px"}
              borderRadius="8px"
              borderColor={"orange.200"}
              placeholder="Categories"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            >
              <option value="option1">All</option>
              <option value="option2">Sandwich</option>
              <option value="option3">Burger</option>
              <option value="option4">Pizza</option>
              <option value="option5">Drinks</option>
              <option value="option6">Salad</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
