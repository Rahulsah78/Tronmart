import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import newarrivalsdata from "../../AlllJsonData/NewArrivals/NewArrivals.json"
import Layout from '../../Components/Layout/Layout';
import { IoSearchOutline } from 'react-icons/io5';
import SimpleGallery from "../Simple/SimpleGallery"

import relatedata from "../../AlllJsonData/RelatedProducts/RelatedProducts.json";
import { addtocart } from '../../Redux/Allslices/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const NewArrivalsDetails = () => {

  const { newarrivalsId } = useParams();

  const newarrivalsproduct = newarrivalsdata.find((item) => item.id === parseInt(newarrivalsId));

  if (!newarrivalsproduct) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  // by default on top 
  useEffect(() => (
    window.scroll(0, 0)
  ), []);

  const handleSearchClick = () => {
    const images = [
      { largeURL: newarrivalsproduct.img, thumbnailURL: newarrivalsproduct.img, width: 800, height: 600 },
    ];
    setGalleryImages(images);
    setLightboxOpen(true);
  };
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [showDescription, setShowDescription] = useState(true); // Default to show description

  const handleTabClick = (tab) => {
    if (tab === 'description') {
      setShowDescription(true);
    } else if (tab === 'review') {
      setShowDescription(false);
    }
  };
  const dispatch = useDispatch()

  // Increment quantity
  const handleIncrement = () => {
    dispatch(addtocart(newarrivalsproduct));
  };

  // Decrement quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(newarrivalsproduct));
    } else {
      toast.info('Quantity cannot go below 1');
    }
  };
  const ADDTOCART = (newarrivalsproduct) => {
    dispatch(addtocart(newarrivalsproduct));
    toast.success("product is added")
  };
  const quantity = newarrivalsproduct ? newarrivalsproduct.qty : 0;

  // mousehover effect 

  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };
  return (
    <>
      <Layout>
        <div className="md:p-10 p-5 bg-[#F7FAFD] min-h-screen flex flex-col md:flex-row">
          {/* Product Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative overflow-hidden hover:cursor-crosshair  flex flex-col gap-10 bg-white shadow-md items-center justify-center md:h-[35vw] h-[80vw] w-full md:w-[40%]"
          >
            <img
              src={newarrivalsproduct.img}
              alt={newarrivalsproduct.name}
              className="h-[50vw] object-cover"
              style={{
                transform: isHovering ? `scale(1.5)` : 'scale(1)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
            {/* Search Icon */}
            <div className="absolute top-3 right-3 h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full">
              <button
                className="text-2xl text-white"
                onClick={handleSearchClick}
              >
                <IoSearchOutline />
              </button>
            </div>
            <div className="flex pb-5 gap-4">
              {/* <div className="items-start h-[10vw] w-36 bg-white"></div>
              <div className="items-start h-[10vw] w-36 bg-white"></div>
              <div className="items-start h-[10vw] w-36 bg-white"></div> */}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:p-10 p-4 w-full md:w-[60%]">
            <h2 className="md:text-2xl font-bold text-gray-800">{newarrivalsproduct.name}</h2>
            <p className="text-gray-600 mt-2">{newarrivalsproduct.description}</p>
            <div className="mt-4">
              <span className="text-lg font-semibold text-green-500">
                ${newarrivalsproduct.price}
              </span>
              {newarrivalsproduct.discount && (
                <del className="ml-4 text-red-400">
                  ${newarrivalsproduct.price + newarrivalsproduct.price * (newarrivalsproduct.discount / 100)}
                </del>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <ul className="list-disc pl-14 text-gray-700">
                {newarrivalsproduct.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Quantity and Cart Buttons */}
              <div className="flex flex-wrap gap-5 items-center mt-6">
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="font-bold text-lg px-4 py-2 border bg-white"
                  >
                    -
                  </button>
                  <span className="font-bold text-lg px-4 py-2 border bg-gray-100">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="font-bold text-lg px-4 py-2 border bg-white"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => ADDTOCART(newarrivalsproduct)}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold"
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>


        {/* Lightbox */}
        <SimpleGallery
          galleryID="product-lightbox"
          images={galleryImages}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />

        {/* More About This Product */}
        <div className="bg-[#F7FAFD] px-10 py-8">
          {/* Tabs */}
          <div className="flex gap-6 border-b-2">
            <button
              className={`text-lg font-medium ${showDescription ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabClick('description')}
            >
              Description
            </button>
            <button
              className={`text-lg font-medium ${!showDescription ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabClick('review')}
            >
              Review
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {showDescription ? (
              <>
                <h1 className="text-gray-800 font-bold md:text-3xl">More about the product</h1>
                <p className="mt-2 text-gray-600 text-lg">
                  This product is designed to offer both functionality and style, making it the perfect choice for any modern user. Crafted from premium materials, it ensures long-lasting durability and superior performance. With advanced features and a sleek design, it’s an essential addition to your collection.
                </p>
                <p className="mt-2 text-gray-600 text-lg">
                  Its user-friendly interface allows for easy handling, making it suitable for both beginners and experts alike. The product is equipped with the latest technology to provide unmatched efficiency, while its compact size makes it portable and easy to store.
                </p>

              </>
            ) : (
              <>
                <p className="mt-2 pb-5 pt-5 text-gray-600">No reviews here</p>
              </>
            )}
          </div>
          <div className='mt-14  md:h-[45vw] bg-[#F7FBFC]'>
            <h1 className=' font-bold text-3xl'>Related products</h1>
            <div className='md:flex items-center justify-between'>
              {
                relatedata.map((item) => (

                  <Link key={item.id} to={`/relatedproductsdetails/${item.id}`}>
                    <div className='mt-5 md:h-[38vw] md:w-[22vw] bg-white'>
                      <img src={item.img} alt={item.name} />
                      <div className='flex flex-col'>
                        <span className='pt-2 text-yellow-500 text-xl'>{item.rating}</span>
                        <label className='text-xl font-bold text-gray-400'>{item.name.slice(0, 52)}</label>
                        <small className='pt-4 font-semibold text-xl'>${item.price}</small>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}

export default NewArrivalsDetails