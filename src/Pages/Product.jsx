import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products , setCartcount ,cartcount ,cartproduct,setCardproduct} = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

  
      <div className="flex gap-4">

     
        <div className="flex flex-col gap-3">
          {productData.image.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setImage(img)}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer border
                ${image === img ? "border-black" : "border-gray-300"}`}
              alt=""
            />
          ))}
        </div>

      
        <div className="flex-1 border">
          <img
            src={image}
            className="w-full h-[300px] sm:h-[480px] object-cover"
            alt=""
          />
        </div>

      </div>

     
      <div className="mt-8 space-y-4">

        <h1 className="text-2xl sm:text-3xl font-semibold">
          {productData.name}
        </h1>

       
        <div className="flex items-center gap-2 text-sm">
          ⭐⭐⭐⭐☆ <span className="text-gray-500">(128 reviews)</span>
        </div>

        <p className="text-xl font-medium">
          ₹{productData.price}
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {productData.description}
        </p>

     
        <div>
          <p className="font-medium mb-2">Select Size</p>
          <div className="flex gap-3 flex-wrap">
            {productData.sizes.map((size, index) => (
              <button
                key={index}
                className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={()=>{
            setCartcount(cartcount+1)
            setCardproduct([...cartproduct,productData])
          }} className="bg-black text-white px-8 py-3">
            Add to Cart
          </button>
          <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition">
            Buy Now
          </button>
        </div>

      
        <div className="pt-4 text-sm text-gray-500">
          <p>Category: {productData.category}</p>
          <p>Sub Category: {productData.subCategory}</p>
          {productData.bestseller && (
            <p className="text-green-600 font-medium mt-1">
              🔥 Bestseller
            </p>
          )}
        </div>

      </div>

      
      <div className="mt-12 border-t pt-8">

        <h2 className="text-2xl font-semibold mb-6">
          Customer Reviews
        </h2>

        <div className="space-y-6">

          <div className="border p-4 rounded">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Riya Sharma</h4>
              <span className="text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Quality is really good. Fabric is soft and comfortable.
              Totally worth the price!
            </p>
          </div>

          
          <div className="border p-4 rounded">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Ankit Verma</h4>
              <span className="text-sm">⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Product looks same as shown in images. Delivery was fast.
            </p>
          </div>

        
          <div className="border p-4 rounded">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Pooja Patel</h4>
              <span className="text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Loved it ❤️ Perfect fitting and nice color.
              Will buy again.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Product;
