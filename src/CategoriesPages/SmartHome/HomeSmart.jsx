import React, { useState, useEffect } from 'react';
import Layout from '../../Pages/Layout/Layout';
import smarthomedata from "../../AlllJsonData/HomeAppliances/HomeAppliances.json";
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Redux/Allslices/CartSlice';
import { toast } from 'react-toastify';

const HomeSmart = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("");
  const [sortedData, setSortedData] = useState([...smarthomedata]);

  // Add to cart
  const ADDTOCART = (item) => {
    dispatch(addtocart(item));
    toast.success('Item added to cart');
  };

  // Handle sorting when the sort option changes
  useEffect(() => {
    let data = [...smarthomedata];
    if (sortOption === "high-to-low") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortOption === "low-to-high") {
      data.sort((a, b) => a.price - b.price);
    }
    setSortedData(data);
  }, [sortOption]);

  return (
    <>
      <Layout>
        <div className="md:ml-10 p-6 min-h-screen">
          <h1 className="text-3xl font-bold text-blue-600">Smart home</h1>
          <p className="md:text-xl text-sm text-gray-600 mt-4">
            Smart home gadgets have revolutionized the way we interact with our living spaces...
          </p>

          <div className='flex items-center justify-between'>
            <p className="text-gray-700 font-medium mt-4">
              Showing all {sortedData.length} results
            </p>
            <div className='mt-5'>
              <select
                name="priceFilter"
                id="priceFilter"
                defaultValue="default"
                className="w-full p-2 text-blue-500 font-semibold bg-white focus:border-blue-500"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-10 pb-10 flex flex-wrap gap-5 min-h-screen w-full">
            {sortedData.map((item, index) => (
              <div key={item.id} className="cursor-pointer">
                <div className="relative overflow-hidden group md:h-[40vw] md:w-[21vw]">
                  <Link to={`/homeappliancesdetails/${item.id}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                  <div className="pt-3 flex flex-col">
                    <Link className="pt-3 flex flex-col" to={`/homeappliancesdetails/${item.id}`}>
                      <span className="text-yellow-500">{item.rating}</span>
                      <label className="md:text-xl text-sm cursor-pointer font-semibold text-gray-500">
                        {item.name}
                      </label>
                    </Link>
                    {/* Price and Discount */}
                    <div className="pt-5 flex gap-3">
                      <label className="font-semibold">
                        Rs{(item.price - (item.price * item.discount) / 100).toFixed()}
                      </label>
                      <del className="text-gray-600">Rs{item.price}</del>
                      <label className="text-red-600">({item.discount}% OFF)</label>
                    </div>
                  </div>
                  {/* Sale Badge */}
                  {index === 3 && (
                    <span className="py-2 px-6 font-bold rounded-[50px] bg-white text-blue-500 shadow-md text-xs absolute top-3 left-3">
                      Sale
                    </span>
                  )}
                  {/* Cart Icon */}
                  <div>
                    <div
                      className="h-8 w-8 flex items-center justify-center font-bold rounded-[50px] bg-blue-500 text-white text-xs absolute top-3 right-[-30px] opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300 ease-in-out"
                    >
                      <button onClick={() => ADDTOCART(item)}>
                        <BsCart4 className="text-xl" />
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
  );
};

export default HomeSmart;
