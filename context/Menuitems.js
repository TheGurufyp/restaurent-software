import { createContext,useState,useEffect } from "react"
import { useToast} from "@chakra-ui/react";
import axios from "axios"
export const MenuitemsContext = createContext();

export const MenuitemsState = (props) => {
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
              // toast({
              //   title: "Software is Ready to use",
              //   status: "success",
              //   duration: 5000,
              //   isClosable: true,
              //   position: "top",
              // });
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
        <MenuitemsContext.Provider value={{items,categories}}>
            {props.children}
        </MenuitemsContext.Provider>
    )



}