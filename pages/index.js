import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  Input,
  Select,
  InputGroup,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
  Highlight,
  useDisclosure,
  InputLeftElement,
} from "@chakra-ui/react";
import Cart from "../Components/Cart";
import Model from "../Components/Model";
import { MenuitemsContext } from "../context/Menuitems";
import {
  useToast,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { useContext } from "react";

export default function Home() {
  
  const toast = useToast();
  const {items,categories}=useContext(MenuitemsContext);
 
  
  return (
    <>
      <Box>
        <Center my={"1rem"}>
          <Heading size={"xl"}>Order Page</Heading>
        </Center>
        <Flex justify="center" align={"center"}>
          <Box width={"25%"}>
            <InputGroup
              border={"1px"}
              borderRadius="8px"
              borderColor={"gray.400"}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="black.300" />}
              />
              <Input type="text" placeholder="Search Here" />
            </InputGroup>
          </Box>
         
        </Flex>
        <Flex
          my={"2rem"}
          // wrap="wrap"
          // direction={"row"}
          justify="space-between"
          // align={"center"}
          // w="100%"
          // border={"1px"}
        >
          <Flex
            wrap={"wrap"}
            justify="space-evenly"
            width={"48%"}
            border="1px"
            borderColor={"gray.300"}
            borderRadius="8px"
            py={"5px"}
          >
          
            {categories?.map((c, i) => {
              return (
                <Model key={c.name} items={items} category={c.name}>
                  {c.name}
                </Model>
              );
            })}
          </Flex>
          <Box
            width={"50%"}
            //  border="1px"
          >
            <Cart />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
