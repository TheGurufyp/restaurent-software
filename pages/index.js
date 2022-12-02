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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const toast = useToast();
  const [items, setitems] = useState([]);
  const [categories, setcategories] = useState();

  const fetchcategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getCategories");
      if (res.data.success) {
        // console.log( res.data.payload);
        setcategories(res.data.payload);
      } else {
        // console.log( res.data.payload);
        toast({
          title: "Something went wronge",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // console.log(error);
      toast({
        title: "Network error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getmenuitems");
        if (res.data.success) {
          // console.log( res.data.payload);
          setitems(res.data.payload);
          toast({
            title: "Software is Ready to use",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        } else {
          // console.log( res.data.payload);
          toast({
            title: "Something went wronge",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        // console.log(error);
        toast({
          title: "Network error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchitems();
    fetchcategories();
  }, []);

  return (
    <>
      <Box>
        <Center my={"1rem"}>
          <Heading size={"xl"}>Categorys</Heading>
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
            // borderColor={"gray.300"}
            borderRadius="8px"
            p={"1rem"}
          >
            {categories?.map((c, i) => {
              return (
                <Model key={c.name} items={items} category={c.name} my="1rem">
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
