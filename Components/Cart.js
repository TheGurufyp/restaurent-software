import { useState,useContext } from "react";
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
import { CartContext } from "../context/cart"


const cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {cart,setcart,totalprice,priceAfterdiscount,discount, setdiscount,cartlength}=useContext(CartContext);

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
          <Box
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
        {
          cart?.map((item,i)=>{
          return  <Product key={i} item={item} index={i}/>
          })
        }
  

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
              <Input id="discount" mx="1rem" type={"number"} size="sm" width={"60px"}></Input>
              <Button onClick={()=>setdiscount(document.getElementById("discount").value)} size={"sm"} colorScheme="blue">apply</Button>
              </HStack>
            </Flex>
            <Divider my={"0.2rem"} width="55%"></Divider>
            <Flex>
              <Box fontWeight={"semibold"}>Total Price After Discount : </Box>
              <Box mx={"1rem"}>{priceAfterdiscount}</Box>
            </Flex>
          </Flex>
          <Flex justify={"right"} mr="2rem">
            <Button onClick={onOpen} variant={"solid"} colorScheme="red">
              Place Order
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Center
                    bg={"blue.400"}
                    width="80%"
                    marginInline={"auto"}
                    borderRadius="8px"
                  >
                    Invoice
                  </Center>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                  w={"100%"}
                  display="flex"
                  // justifyContent={"center"}
                  flexDirection={"column"}
                  justifyContent="center"
                  // marginInline={"auto"}
                  alignContent="auto"
                  alignItems="center"
                  // border="1px"
                >
                  <Flex
                    // border={"1px"}
                    // flexDir="column"
                    width={"70%"}
                    justify="space-between "
                    align="center"
                    direction={"column"}
                    marginInline="auto"
                    ref={componentRef}
                  >
                    <Flex
                      border={"1px"}
                      borderColor="gray.500"
                      direction="column"
                      width={"70%"}
                      my="1rem"
                      // justify={"center"}
                      // align="center"
                      marginInline={"auto"}
                      // height="380px"
                    >
                      <Center border={"1px"} className="H-1">
                        Wakhraa Sawaad
                      </Center>
                      <Flex
                        // border={"1px"}
                        justify="space-between"
                        my={"1rem"}
                        w="100%"
                      >
                        <Box className="H-2" ml={"1rem"}>
                          Invoice # 1
                        </Box>
                        <Box className="H-2" mr={"1rem"}>
                          Date : 16-Nov-2022
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width="30%"
                          className="H-3"
                        >
                          Items
                        </Box>
                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width={"10%"}
                          className="H-3"
                        >
                          Price
                        </Box>
                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width={"10%"}
                          className="H-3"
                        >
                          Qt
                        </Box>
                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width={"20%"}
                          className="H-3"
                        >
                          Total Price
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="30%">
                          <Text className="H-4">
                            Chicken Pizza , Vegitable pizza and 2 sauce
                          </Text>
                        </Box>
                        <Box width={"10%"} className="H-4">
                          1500
                        </Box>
                        <Box width={"10%"} className="H-4">
                          1
                        </Box>
                        <Box width={"20%"} className="H-4">
                          1500
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="30%">
                          <Text className="H-4">Sajji</Text>
                        </Box>
                        <Box width={"10%"} className="H-4">
                          1500
                        </Box>
                        <Box width={"10%"} className="H-4">
                          10
                        </Box>
                        <Box width={"20%"} className="H-4">
                          15000
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="30%">
                          <Text className="H-4">Chicken Pizza </Text>
                        </Box>
                        <Box width={"10%"} className="H-4">
                          1500
                        </Box>
                        <Box width={"10%"} className="H-4">
                          3
                        </Box>
                        <Box width={"20%"} className="H-4">
                          2900
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="30%">
                          <Text></Text>
                        </Box>
                        <Box width={"5%"}></Box>
                        <Box
                          width={"20%"}
                          fontWeight="semibold"
                          className="H-5"
                        >
                          Total Price :
                        </Box>
                        <Box width={"20%"}>8500</Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="30%">
                          <Text></Text>
                        </Box>
                        <Box width={"5%"}></Box>
                        <Box
                          width={"35%"}
                          fontWeight="semibold"
                          className="H-5"
                        >
                          Price After Discount :
                        </Box>
                        <Box width={"22%"}>500</Box>
                      </Flex>
                      <Center>
                        <Text>Thanks For order</Text>
                      </Center>
                    </Flex>

                    <Flex
                      my="2rem"
                      border={"1px"}
                      borderColor="gray.500"
                      direction="column"
                      width={"70%"}
                      // justify={"center"}
                      // align="center"
                      marginInline={"auto"}
                      // height="380px"
                    >
                      <Center border={"1px"} className="H-1">
                        Wakhraa Sawaad
                      </Center>
                      <Flex
                        // border={"1px"}
                        justify="space-between"
                        my={"1rem"}
                        w="100%"
                      >
                        <Box className="H-2" ml={"1rem"}>
                          Invoice # 1
                        </Box>
                        <Box className="H-2" mr={"1rem"}>
                          Date : 16-Nov-2022
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width="70%"
                          className="H-3"
                        >
                          Items
                        </Box>

                        <Box
                          // border={"1px"}
                          fontWeight="semibold"
                          width={"20%"}
                          className="H-3"
                        >
                          QT.
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="70%">
                          <Text className="H-4">
                            Chicken Pizza , Vegitable pizza and 2 sauce
                          </Text>
                        </Box>

                        <Box width={"20%"} className="H-4">
                          2
                        </Box>
                      </Flex>
                      <Flex
                        border={"1px"}
                        // width="420px"
                        width="100%"
                        justify={"space-around"}
                      >
                        <Box width="70%">
                          <Text className="H-4">Sajji</Text>
                        </Box>

                        <Box className="H-4" width={"20%"}>
                          1
                        </Box>
                      </Flex>

                      <Center>
                        <Text>Order List</Text>
                      </Center>
                      <Center bg={"black"} color="white">
                        Invoice
                      </Center>
                    </Flex>
                  </Flex>
                  <Button onClick={handlePrint} colorScheme="blue">
                    {" "}
                    Print{" "}
                  </Button>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default cart;
