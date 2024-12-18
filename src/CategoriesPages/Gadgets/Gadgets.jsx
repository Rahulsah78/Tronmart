import React from 'react'
import Layout from '../../Pages/Layout/Layout'
import gadegtsdata from "../../AlllJsonData/Gadget/Gadget.json";
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Redux/Allslices/CartSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';


const Gadgets = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState([...gadegtsdata]);

  // Handle adding to cart
  const ADDTOCART = (item) => {
    dispatch(addtocart(item));
    toast.success('Item added to cart');
  };

  // Update sorted data whenever sortOption changes
  useEffect(() => {
    let data = [...gadegtsdata];
    if (sortOption === "highToLow") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortOption === "lowToHigh") {
      data.sort((a, b) => a.price - b.price);
    }
    setSortedData(data);
  }, [sortOption]);

  return (
    <>
      <Layout>
        <div className="ml-5 md:p-6 pt-5  min-h-screen">
          <h1 className="text-3xl font-bold text-blue-600">Gadgets </h1>
          <p className="md:text-xl  text-sm text-gray-600 mt-4">
            Gadgets are compact, innovative devices designed to improve convenience, functionality, and entertainment in daily life. From smartphones and tablets to wearables and smart home devices, gadgets offer a wide range of features that enhance productivity, health, and leisure. These tech tools are often designed to be portable, user-friendly, and customizable, making them an integral part of modern living.
          </p>

          <div className='flex items-center justify-between'>
            <p className="text-gray-700 font-medium mt-4">Showing all {gadegtsdata.length} results</p>
            <div>
              <select
                onChange={(e) => setSortOption(e.target.value)}
                name="priceFilter"
                id="priceFilter"
                defaultValue="default"
                className="w-full p-2 text-blue-500 font-semibold  bg-white  focus:border-blue-500"
              >
                <option className="" value="default">
                  Default Sorting
                </option>
                <option className='text-gray-500 font-semibold' value="lowToHigh">
                  Low to High
                </option>
                <option className='text-gray-500 font-semibold' value="highToLow">
                  High to Low
                </option>
              </select>
            </div>
          </div>

          <div className="mt-10 pb-10 flex flex-wrap gap-5 min-h-screen w-full ">
            {sortedData.map((item) => (
              <div key={item.id}>
                <div className="relative md:h-[40vw] md:w-[21vw] group overflow-hidden">
                  <Link to={`/gadgetdetails/${item.id}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                  <div className="pt-3 flex flex-col">
                    <Link className="flex flex-col" to={`/gadgetdetails/${item.id}`}>
                      <span className="text-yellow-500">{item.rating}</span>
                      <label className="md:text-xl text-sm cursor-pointer font-semibold text-gray-500">{item.name}</label>
                    </Link>
                    {/* Price and Discount */}
                    <div className="pt-5 flex gap-3">
                      <label className="font-semibold">Rs{(item.price - (item.price * item.discount) / 100).toFixed()}</label>
                      <del className="text-gray-600">Rs{item.price}</del>
                      <label className="text-red-600">({item.discount}% OFF)</label>
                    </div>
                  </div>

                  {/* Sale Badge */}
                  <span className="py-2 px-6 font-bold rounded-[50px] bg-white text-blue-500 shadow-md text-xs absolute top-3 left-3">
                    Sale
                  </span>

                  {/* cart icon */}
                  <div>
                    <div
                      className="h-8 w-8 flex items-center justify-center font-bold rounded-[50px] bg-blue-500 text-white text-xs absolute top-3 right-[-30px] opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300 ease-in-out"
                    >
                      <button>
                        <BsCart4 onClick={() => ADDTOCART(item)} className="text-xl" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Gadgets
