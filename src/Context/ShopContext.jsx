import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  
    const currency = '$'
    const delivery_fees = 10
    const [search,setSearch] = useState([])
    const [showSearch,setShowSearch] = useState(false)
    const [cartcount,setCartcount] = useState(0)
    const [cartproduct,setCardproduct] = useState([])
    

  const value = {
    products ,currency,delivery_fees , search ,setSearch,showSearch,setShowSearch ,cartcount ,setCartcount , cartproduct , setCardproduct
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
