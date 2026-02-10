import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartproduct } = useContext(ShopContext);

  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const updated = cartproduct.map(item => ({
      ...item,
      quantity: item.quantity ? item.quantity : 1
    }));
    setCartItems(updated);
  }, [cartproduct]);


  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  
  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

 
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  
  if (cartItems.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map(item => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row gap-4 border p-4 rounded"
          >
           
            <img
              src={item.image[0]}
              alt=""
              className="w-full sm:w-32 h-40 object-cover"
            />

         
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.category} / {item.subCategory}
              </p>

              <p className="mt-2 font-medium">₹{item.price}</p>

              {/* Quantity Control */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="w-8 h-8 border flex items-center justify-center hover:bg-black hover:text-white"
                >
                  −
                </button>

                <span className="w-8 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item._id)}
                  className="w-8 h-8 border flex items-center justify-center hover:bg-black hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

          
            <div className="text-right font-medium">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between gap-6">
        <div className="text-lg font-medium">
          Total Amount:
        </div>

        <div className="text-2xl font-semibold">
          ₹{totalAmount}
        </div>
      </div>

     
      <div className="mt-6 text-right">
        <button className="bg-black text-white px-8 py-3 hover:opacity-90">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
