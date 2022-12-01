import { React, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  ModalCloseButton,
  Flex,
  useDisclosure,
  Button,
  Center,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Actions from "./Actions";

const Model = ({ children ,items,category}) => {
  const [newQuantity, setnewQuantity] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filteritems, setfilteritems] = useState([])


  const filterbycategory=()=>{
 
    const filterresult= items.filter((item)=>{
      return item.category===category;
     })
     setfilteritems(filterresult);
   
     
  }


  return (
    <>
      <Box>
        <Button
          onClick={()=>{filterbycategory();onOpen();}}
          as="span"
          w={"200px"}
          height={"200px"}
          border={"1px"}
          borderRadius="10px"
          bg="blue.400"
          color={"white"}
        >
          {children}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay w={"100%"} />
          <ModalContent>
            <ModalHeader>
              <Center>Pizza Category</Center>
            </ModalHeader>
            <ModalCloseButton />
            <Flex>
              <ModalBody>

              {
                filteritems?.map((item,i)=>{
                  return (
                    <Card maxW="300px" key={i}>
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{item.name}</Heading>
  
                        <Tabs variant="soft-rounded" colorScheme="blue">
                          <TabList>
                            {
                              item?.sizes.map((s,i)=>{
                                return (
                                  <Tab key={i}>{s.size}</Tab>
                                )
                              })
                            }
                            
                          </TabList>
                          <TabPanels>
                            {
                              item?.sizes.map((s,i)=>{
                                return (
                                  <TabPanel key={i} color="blue.600" fontSize="2xl">
                              <p>Rs {s.price}</p>
                            </TabPanel>
                                )
                              })
                            }
                          
                          </TabPanels>
                        </Tabs>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Box display={"flex"}>
                          <Actions
                            newQuantity={newQuantity}
                            setnewQuantity={setnewQuantity}
                          />
                        </Box>
                        <Button mx="1.2rem" variant="outline" colorScheme="blue">
                          Add to cart
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                  )
                })
              }
                {/* <Card maxW="300px">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Chicken Tikka</Heading>

                      <Tabs variant="soft-rounded" colorScheme="blue">
                        <TabList>
                          <Tab>S</Tab>
                          <Tab>M</Tab>
                          <Tab>L</Tab>
                          <Tab>XL</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel color="blue.600" fontSize="2xl">
                            <p>Rs 380</p>
                          </TabPanel>
                          <TabPanel color="blue.600" fontSize="2xl">
                            <p>Rs 700</p>
                          </TabPanel>
                          <TabPanel color="blue.600" fontSize="2xl">
                            <p>Rs 1150</p>
                          </TabPanel>
                          <TabPanel color="blue.600" fontSize="2xl">
                            <p>Rs 1580</p>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Box display={"flex"}>
                        <Actions
                          newQuantity={newQuantity}
                          setnewQuantity={setnewQuantity}
                        />
                      </Box>
                      <Button mx="1.2rem" variant="outline" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card> */}
                

              </ModalBody>

             
            </Flex>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Model;
