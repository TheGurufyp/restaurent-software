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
import { useReactToPrint } from "react-to-print";
import React, { useRef, useContext } from "react";
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

const Print = ({ children, item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    cart,
    setcart,
    totalprice,
    priceAfterdiscount,
    discount,
    setdiscount,
    cartlength,
  } = useContext(CartContext);

  return (
    <>
      <Button onClick={onOpen} variant={"solid"} colorScheme="red">
        Place Order
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center
              bg={"blue.400"}
              width="30%"
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
                    {Date()}
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
                {item.map((item) => {
                  return (
                    <Flex
                      border={"1px"}
                      // width="420px"
                      width="100%"
                      justify={"space-around"}
                    >
                      <Box width="30%">
                        <Text className="H-4">{item.name}</Text>
                      </Box>
                      <Box width={"10%"} className="H-4">
                        {item.price}
                      </Box>
                      <Box width={"10%"} className="H-4">
                        {item.quantity}
                      </Box>
                      <Box width={"20%"} className="H-4">
                        {item.totalPrice}
                      </Box>
                    </Flex>
                  );
                })}

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
                  <Box width={"25%"} fontWeight="semibold" className="H-2">
                    Total Price :
                  </Box>
                  <Box width={"20%"} className="H-4">
                    {totalprice}
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
                  <Box width={"25%"} fontWeight="semibold" className="H-2">
                    Discount:
                  </Box>
                  <Box width={"20%"} className="H-4">
                    {discount}
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
                  <Box width={"45%"} fontWeight="semibold" className="H-2">
                    Price After Discount :
                  </Box>
                  <Box width={"25%"} className="H-4">
                    {priceAfterdiscount}
                  </Box>
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
                {item.map((item) => {
                  return (
                    <Flex
                      border={"1px"}
                      // width="420px"
                      width="100%"
                      justify={"space-around"}
                    >
                      <Box width="70%">
                        <Text className="H-4">{item.name}</Text>
                      </Box>

                      <Box width={"20%"} className="H-4">
                        {item.quantity}
                      </Box>
                    </Flex>
                  );
                })}

                <Center>
                  <Text>Order List</Text>
                </Center>
                <Center bg={"black"} color="white">
                  Invoice
                </Center>
              </Flex>
            </Flex>
            <Button onClick={handlePrint} colorScheme="blue">
              Print
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Print;
