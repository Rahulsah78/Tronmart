import React, { useEffect, useState } from "react";
import Layout from "../../Pages/Layout/Layout";
import { Link } from "react-router-dom";
import pcandlaptopdata from "../../AlllJsonData/PcAndLaptop/PcAndLaptop.json";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/Allslices/CartSlice";
import { toast } from "react-toastify";

const Laptop = () => {
  const dispatch = useDispatch();

  // Add to Cart
  const ADDTOCART = (item) => {
    dispatch(addtocart(item));
    toast.success("Item added to cart");
  };

  const [sortOption, setSortOption] = useState("");
  const [sortedData, setSortedData] = useState([...pcandlaptopdata]);

  // Handle sorting when the sort option changes
  useEffect(() => {
    let data = [...pcandlaptopdata];
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
        <div className="md:ml-10 p-6 min-h-screen">
          <h1 className="text-3xl font-bold text-blue-600">PCs & Laptops</h1>
          <p className="md:text-xl text-sm text-gray-600 mt-4">
            PCs and laptops are indispensable tools in both professional and
            personal settings, offering versatility, performance, and
            portability. Desktop computers, or PCs, are powerful systems
            suitable for intensive tasks like gaming, video editing, and
            software development. Laptops, on the other hand, provide mobility
            without sacrificing performance, making them perfect for remote
            work, study, and travel. With continuous advancements in processing
            power, storage options, and battery life, both PCs and laptops
            remain essential for productivity and entertainment in the digital
            age.
          </p>

          <div className="flex items-center justify-between">
            <p className="text-gray-700 font-medium mt-4">
              Showing all {sortedData.length} results
            </p>
            <div className="mt-5">
              <select
                onChange={(e) => setSortOption(e.target.value)}
                name="priceFilter"
                id="priceFilter"
                defaultValue="default"
                className="w-full p-2 text-blue-500 font-semibold bg-white focus:border-blue-500"
              >
                <option value="default">Default Sorting</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-10 pb-10 flex flex-wrap gap-5 min-h-screen w-full">
            {sortedData.map((item, index) => (
              <div key={item.id} className="cursor-pointer">
                <div className="relative overflow-hidden group md:h-[40vw] md:w-[21vw]">
                  <Link to={`/pc_laptopdetails/${item.id}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                  <div className="pt-3 flex flex-col">
                    <Link
                      className="pt-3 flex flex-col"
                      to={`/pc_laptopdetails/${item.id}`}
                    >
                      <span className="text-yellow-500">{item.rating}</span>
                      <label className="md:text-xl text-sm cursor-pointer font-semibold text-gray-500">
                        {item.name.slice(0, 70)}
                      </label>
                    </Link>
                    {/* Price and Discount */}
                    <div className="pt-5 flex gap-3">
                      <label className="font-semibold">
                        Rs
                        {(item.price - (item.price * item.discount) / 100).toFixed(
                          2
                        )}
                      </label>
                      <del className="text-gray-600">Rs{item.price}</del>
                      <label className="text-red-600">
                        ({item.discount}% OFF)
                      </label>
                    </div>
                  </div>

                  {/* Sale Badge */}
                  {(index === 1 || index === 2) && (
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

export default Laptop;
