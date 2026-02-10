import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Componenets/Title";
import ProductItem from "../Componenets/ProductItem";

const Collection = () => {
  const [showfilter, setShowFilter] = useState(false);
  const { products,search ,showSearch } = useContext(ShopContext);
  const [filterproduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType,setSortType] = useState('relevent')
  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };
// console.log(showSearch,search);

  const applyfilter = () => {
    let productscopy = products.slice();
    if (showSearch && search && search.length>0) {
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subcategory.length > 0) {
      productscopy = productscopy.filter((item) =>
        subcategory.includes(item.subCategory),
      );
    }

    setFilterProduct(productscopy);
  };
 const sortproduct = ()=>{
    
    let ftproductcopy = filterproduct.slice()
    switch(sortType){
      case 'low-high':
        setFilterProduct(ftproductcopy.sort((a,b)=>(a.price - b.price)))
        break;

      case 'high-low':
        setFilterProduct(ftproductcopy.sort((a,b)=>(b.price-a.price)))
        break;

        default:
          applyfilter();
          break
    }

 }

 useEffect(()=>{
   
  sortproduct()
 },[sortType])

  useEffect(() => {
    applyfilter();
    
  }, [category, subcategory,search,showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showfilter);
          }}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Men"}
                onChange={togglecategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Women"}
                onChange={togglecategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Kids"}
                onChange={togglecategory}
              />
              kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Topwear"}
                onChange={togglesubcategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Bottomwear"}
                onChange={togglesubcategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                name=""
                id=""
                value={"Winterwear"}
                onChange={togglesubcategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select onChange={((e)=>setSortType(e.target.value))} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relevent">Sort by relevent</option>
            <option value="low-high">Sort by low to high</option>
            <option value="high-low">Sort by high to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterproduct.map((item, index) => {
            return (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
