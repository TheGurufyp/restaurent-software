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
  const [categories, setcategories] = useState({ categories: [] });
  const [find, setfind] = useState({ searchField: "" });

  const search = (event) => {
    // console.log(event.target.value);
    // console.log(categories);
    let searchField = event.target.value.toLocaleLowerCase();
    setfind(() => {
      return { searchField };
    });

    // setcategories(categ);
    // console.log(categ);
  };

  const fetchcategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getCategories");
      if (res.data.success) {
        // console.log( res.data.payload);
        setcategories({ categories: res.data.payload });
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

  // console.log(find);
  // console.log(categories);

  let categ = categories.categories.filter((result) => {
    return result.name.toLocaleLowerCase().includes(find.searchField);
  });
  // console.log(categ);

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
              <Input type="text" placeholder="Search Here" onChange={search} />
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
            p={"1rem"}
          >
            {categ?.map((c, i) => {
              return (
                <Model key={c.name} items={items} category={c.name}>
                  <Flex
                    // justify="center"
                    // align={"center"}
                    // direction="row"
                    fontWeight={"semibold"}
                    fontSize="2rem"
                  >
                    {c.name}
                  </Flex>
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
