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
import ItemCard from "./ItemCard";

const Model = ({ children ,items,category}) => {
 
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
                   <ItemCard key={i} item={item}/>
                  )
                })
              }
               
                

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
