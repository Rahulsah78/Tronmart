import Layout from "../../Pages/Layout/Layout";
import airconditioner from "../../AlllJsonData/AirConditioner/AirConditioner.json";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/Allslices/CartSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";


const Conditioner = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState([...airconditioner]);

  // Handle adding to cart
  const ADDTOCART = (item) => {
    dispatch(addtocart(item));
    toast.success('Item added to cart');
  };

  // Update sorted data whenever sortOption changes
  useEffect(() => {
    let data = [...airconditioner];
    if (sortOption === "highToLow") {
      data.sort((a, b) => b.price - a.price);
    } else if (sortOption === "lowToHigh") {
      data.sort((a, b) => a.price - b.price);
    }
    setSortedData(data);
  }, [sortOption]);
  return (
    <Layout>
      <div className="md:ml-10 p-6 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-600">Air Conditioner</h1>
        <p className="md:text-xl text-sm text-gray-600 mt-4">
          Air conditioners (ACs) are essential appliances that regulate indoor temperature, providing comfort and energy efficiency in various environments. Modern air conditioning systems come in a range of designs and functionalities, making them versatile for residential, commercial, and industrial applications.
        </p>

        <div className='flex items-center justify-between'>
          <p className="text-gray-700 font-medium mt-4">Showing all {airconditioner.length} results</p>
          <div className="mt-5">
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
                <Link to={`/airconditionerdetails/${item.id}`}>
                  <img src={item.img} alt={item.name} />
                </Link>
                <div className="pt-3 flex flex-col">
                  <Link className="flex flex-col" to={`/airconditionerdetails/${item.id}`}>
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
  );
};

export default Conditioner;
