import { useState, useContext } from "react";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import {
  Heading,
  Center,
  Input,
  Box,
  Flex,
  Button,
  Divider,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Product from "./Product";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CartContext } from "../context/cart";
import Print from "./Print";

const cart = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cart,
    setcart,
    totalprice,
    priceAfterdiscount,
    discount,
    setdiscount,
    cartlength,
  } = useContext(CartContext);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Flex
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"8px"}
        // width="50%"
        marginInline={"auto"}
        direction="column"
        // my="0.5rem"
        p={"1rem"}
      >
        <Flex
          w={"100%"}
          // border={"1px"}
          justify="space-between"
          align={"center"}
        >
          <Box
            // border={"1px"}
            p="10px"
            fontWeight={"semibold"}
            fontSize="1.5rem"
          >
            Cart
          </Box>
          <Box
            // border={"1px"}
            p="10px"
            fontWeight={"semibold"}
            fontSize="1.5rem"
          >
            {cartlength} Items
          </Box>
        </Flex>
        <Divider my={"1rem"} />
        <Flex
          //  border={"1px"}
          justify="space-between"
          align={"center"}
        >
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Food Detail
          </Box>
          <Box  textAlign="center"
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Quantity
          </Box>
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Price
          </Box>
          <Box
            w={"20%"}
            //    border={"1px"}
            fontWeight="semibold"
          >
            Total Price
          </Box>
          <Box width={"5%"}></Box>
        </Flex>
        {cart?.map((item, i) => {
          return <Product key={i} item={item} index={i} />;
        })}

        <Divider my={"0.6rem"}></Divider>

        <Flex
          //   border={"1px"}
          // direction="row"
          align={"center"}
          justify="space-between"
        >
          <Flex
            // justify={"space-between"}
            // width="40%"
            justify={"right"}
            // marginInline={"auto"}
            direction="column"
          >
            <Flex>
              <Box fontWeight={"semibold"}>Total Price : </Box>
              <Box mx={"1rem"}>{totalprice}</Box>
            </Flex>
            <Divider my={"0.2rem"} width="40%"></Divider>
            <Flex my={"0.7rem"} justify={"left"} align="center">
              <Text colorScheme={"blue"} fontWeight="semibold">
                Discount %{" "}
              </Text>
              <HStack spacing={0}>
                <Input
                  id="discount"
                  mx="1rem"
                  type={"number"}
                  size="sm"
                  width={"60px"}
                ></Input>
                <Button
                  onClick={() =>
                    setdiscount(document.getElementById("discount").value)
                  }
                  size={"sm"}
                  colorScheme="blue"
                >
                  apply
                </Button>
              </HStack>
            </Flex>
            <Divider my={"0.2rem"} width="55%"></Divider>
            <Flex>
              <Box fontWeight={"semibold"}>Total Price After Discount : </Box>
              <Box mx={"1rem"}>{priceAfterdiscount}</Box>
            </Flex>
          </Flex>
          <Flex justify={"right"} mr="2rem">
            <Print item={cart} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default cart;
