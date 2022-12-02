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

const Model = ({ children, items, category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filteritems, setfilteritems] = useState([]);

  const filterbycategory = () => {
    const filterresult = items.filter((item) => {
      return item.category === category;
    });
    setfilteritems(filterresult);
  };

  return (
    <>
      <Box>
        <Flex
          onClick={() => {
            filterbycategory();
            onOpen();
          }}
          align="center"
          justify={"center"}
          textAlign="center"
          w={"145px"}
          height={"130px"}
          border={"1px"}
          borderRadius="10px"
          bg="blue.400"
          color={"white"}
          my="5px"
          fontSize={"1.5rem"}
          overflowWrap="break-all"
          cursor={"pointer"}
          _hover={{
            bg:"blue.600"
          }}
         
        >
      
          {`${children}`}
       

        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay w={"100%"} />
          <ModalContent>
            <ModalHeader>
              <Center>{category}</Center>
            </ModalHeader>
            <ModalCloseButton />
            <Flex>
              <ModalBody>
                {filteritems?.map((item, i) => {
                  return <ItemCard key={i} item={item} />;
                })}
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
