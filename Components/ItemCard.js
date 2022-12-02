import { React, useContext, useState } from "react";
import Actions from "./Actions";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
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
  import { CartContext } from "../context/cart"
function ItemCard({item}) {

    const [newQuantity, setnewQuantity] = useState(1);
    const [selectedSize, setselectedSize] = useState();
    const {cart,setcart}=useContext(CartContext);


  const handeclick=()=>{
let price;
let size;
    if(typeof(selectedSize)==="undefined")
{
  size=item.sizes[0].size;
  price=item.sizes[0].price;
}
else{
  size=selectedSize.size;
  price=selectedSize.price;
}
let totalprice=price*newQuantity;


        const cartitem={
          name:`${item.name} (${size})`,
          price:price,
          totalPrice:totalprice,
          quantity:newQuantity
        }
       
        setcart([...cart,cartitem]);
        setnewQuantity(1);
       
  }


  return (
  <>
  
  <Card maxW="300px" >
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{item.name}</Heading>
  
                        <Tabs variant="soft-rounded" colorScheme="blue">
                          <TabList>
                            {
                              item?.sizes.map((s,i)=>{
                                return (
                                  <Tab onClick={()=>{setselectedSize(s)}} key={i}>{s.size}</Tab>
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
                        <Button mx="1.2rem" variant="outline" colorScheme="blue" onClick={()=>handeclick()}>
                          Add to cart
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
  
  
  
  
  </>
  )
}

export default ItemCard