import { createContext,useState,useEffect } from "react"
export const CartContext = createContext();



export const CartState = (props) => {
  
    const [cart, setcart] = useState([]);
    const [totalprice, settotalprice] = useState(0);
    const [priceAfterdiscount, setpriceAfterdiscount] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [cartlength, setcartlength] = useState(0)

useEffect(() => {
  

  setpriceAfterdiscount((totalprice-((discount/100)*totalprice)))

 
}, [discount]) 


    useEffect(() => {
     
        let t=0;
      for (let i = 0; i < cart.length; i++) {
       t=t+cart[i].totalPrice;
        
      }
    settotalprice(t);
    setcartlength(cart.length);
   
    
          setpriceAfterdiscount((t-((discount/100)*t)))

    
      }, [cart])





    return (
        <CartContext.Provider value={{cart, setcart,totalprice,priceAfterdiscount,discount, setdiscount,cartlength}}>
            {props.children}
        </CartContext.Provider>
    )



}