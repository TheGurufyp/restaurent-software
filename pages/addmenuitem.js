import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Input,
  Text,
  Select,
  HStack,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import Sizes from "../Components/Sizes";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { MenuitemsContext } from "../context/Menuitems";

function Addmenuitem() {
  const { items, categories } = useContext(MenuitemsContext);
  const reset = useRef();
  const toast = useToast();

  const initialValues = {
    name: "",
    category: "",
    friends: [
      {
        size: "",
        price: 0,
      },
    ],
  };

  return (
    <>
      <Flex mx="auto" maxW="1500px" direction={"column"} align="center">
        <Heading mb="50px" mt="40px" textAlign={"center"}>
          Add Menu item
        </Heading>

        <Box mx="auto" w="500px">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              let fl = false;
              if (!values.name || !values.category) {
                fl = true;
              }
              for (let i = 0; i < values.friends.length; i++) {
                if (!values.friends[i].size || !values.friends[i].price) {
                  fl = true;
                  break;
                }
              }

              if (fl) {
                toast({
                  title: "Fill all fields",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "top",
                });
                return;
              }

              try {
                const res = await axios.post(
                  "http://localhost:3000/api/addmenuitem",
                  {
                    sizes: values.friends,
                    name: values.name,
                    category: values.category,
                  }
                );
                console.log(res.data);
                if (res.data.success) {
                  toast({
                    title: "Item Added.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                  reset.current.click();
                } else {
                  toast({
                    title: "something went wronge.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                  });
                }
              } catch (error) {
                // console.log(error)
                toast({
                  title: "Network Error",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "top",
                });
              }
            }}
          >
            {({ values }) => (
              <Form>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                />
                <Field
                  mt="20px"
                  as={Select}
                  name="category"
                  placeholder="Select Category"
                >
                  {categories?.map((c, i) => {
                    return (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    );
                  })}
                </Field>

                <Text fontSize={"1.2rem"} fontWeight={"semibold"} mt="20px">
                  Select Sizes
                </Text>

                <FieldArray name="friends">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.friends.length > 0 &&
                        values.friends.map((friend, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              {/* <label htmlFor={`friends.${index}.size`}>Size</label> */}
                              {/* <Field as={Input}
                          name={`friends.${index}.size`}
                          placeholder="Enter size"
                          type="text"
                        /> */}
                              <Field
                                mt="10px"
                                as={Select}
                                name={`friends.${index}.size`}
                                placeholder="Select Size"
                              >
                                <option value="N">N</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="Q">Q</option>
                                <option value="H">H</option>
                                <option value="F">F</option>
                              </Field>

                              <ErrorMessage
                                name={`friends.${index}.size`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`friends.${index}.price`}>
                                Price
                              </label>
                              <Field
                                as={Input}
                                name={`friends.${index}.price`}
                                placeholder="Enter price"
                                type="number"
                              />

                              <ErrorMessage
                                name={`friends.${index}.price`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <Button
                                mt="10px"
                                colorScheme={"red"}
                                size="sm"
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </Button>
                            </div>
                          </div>
                        ))}
                      <Button
                        mt="10px"
                        colorScheme={"teal"}
                        type="button"
                        className="secondary"
                        onClick={() => push({ size: "", price: "" })}
                      >
                        Add size
                      </Button>
                    </div>
                  )}
                </FieldArray>
                <Button mt="10px" colorScheme={"blue"} type="submit">
                  Add Item
                </Button>
                <Button ref={reset} display="none" type="reset">
                  Reset
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default Addmenuitem;

// export async function getServerSideProps(context) {

//     try {
//       const res=await axios.post("http://localhost:3000/api/addmenuitem");
//       const data=res.data;
//       return {
//         props: {data},
//       }

//     }
//     catch (error) {

//     return {
//       notFound: true,
//     }
//     }

//   }
