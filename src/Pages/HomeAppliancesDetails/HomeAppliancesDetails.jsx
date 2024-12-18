import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Layout from '../../Components/Layout/Layout';
import { addtocart, decreaseQuantity } from "../../Redux/Allslices/CartSlice";
import { IoSearchOutline } from 'react-icons/io5';
import SimpleGallery from "../Simple/SimpleGallery";
import relatedata from "../../AlllJsonData/RelatedProducts/RelatedProducts.json";
import homedata from "../../AlllJsonData/HomeAppliances/HomeAppliances.json"



const HomeAppliances = () => {


    const dispatch = useDispatch();
    const { homeId } = useParams();

    const homeproduct = homedata.find((item) => item.id === parseInt(homeId));

    if (!homeproduct) {
        return <h2 className="text-center text-red-500">Product not found!</h2>;
    }


    const cart = useSelector((state) => state.cart.carts); // Redux state for cart
    const productInCart = cart.find((item) => item.id === homeproduct.id);
    const quantity = productInCart ? productInCart.qty : 0;

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mouse hover zoom effect
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    // Gallery lightbox
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
    const handleSearchClick = () => {
        setGalleryImages([{ largeURL: homeproduct.img, thumbnailURL: homeproduct.img }]);
        setLightboxOpen(true);
    };

    // Add to cart
    const handleAddToCart = () => {
        dispatch(addtocart(homeproduct));
        toast.success('Item added to cart');
    };

    // Increment quantity
    const handleIncrement = () => {
        dispatch(addtocart(homeproduct));
    };

    // Decrement quantity
    const handleDecrement = () => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(homeproduct));
        } else {
            toast.info('Quantity cannot go below 1');
        }
    };
    const ADDTOCART = (homeproduct) => {
        dispatch(addtocart(homeproduct));
        toast.success("product is added")
    }
    return (
        <Layout>
            <div className="p-6 sm:p-10 bg-[#F7FAFD] min-h-screen flex flex-col md:flex-row">
                {/* Product Image */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="relative overflow-hidden flex flex-col items-center justify-center bg-white shadow-md w-full md:w-[40%] h-auto mb-6 md:mb-0"
                >
                    <img
                        src={homeproduct.img}
                        alt={homeproduct.name}
                        className="w-full h-auto object-cover"
                        style={{
                            transform: isHovering ? `scale(1.5)` : 'scale(1)',
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                    />
                    <button
                        className="absolute top-3 right-3 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-2xl text-white"
                        onClick={handleSearchClick}
                    >
                        <IoSearchOutline />
                    </button>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-[60%]  sm:p-10">
                    <h2 className=" sm:text-2xl font-bold text-gray-800">{homeproduct.name}</h2>
                    <p className="text-gray-600 mt-2">{homeproduct.description}</p>

                    {/* Price */}
                    <div className="flex gap-3 items-center pt-5">
                        <span className="font-semibold text-base sm:text-lg">
                            Rs {(homeproduct.price - (homeproduct.price * homeproduct.discount) / 100).toFixed()}
                        </span>
                        <del className="text-gray-600 text-sm sm:text-base">Rs {homeproduct.price}</del>
                        <span className="text-red-600 text-sm sm:text-base">({homeproduct.discount}% OFF)</span>
                    </div>

                    {/* Key Features */}
                    <div className="mt-6">
                        <h3 className="text-base sm:text-lg font-semibold">Key Features:</h3>
                        <ul className="list-disc pl-6 sm:pl-8 text-sm sm:text-base text-gray-700">
                            {homeproduct.keyFeatures?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Quantity and Cart Buttons */}
                    <div className="flex flex-wrap gap-5 items-center mt-6">
                        <div className="flex items-center">
                            <button
                                onClick={handleDecrement}
                                className="font-bold text-lg px-3 sm:px-4 py-2 border bg-white"
                            >
                                -
                            </button>
                            <span className="font-bold text-lg px-3 sm:px-4 py-2 border bg-gray-100">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrement}
                                className="font-bold text-lg px-3 sm:px-4 py-2 border bg-white"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => ADDTOCART(homeproduct)}
                            className=" sm:w-auto px-4 sm:px-6 py-3 bg-blue-500 text-white font-semibold"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            {/* Lightbox */}
            {lightboxOpen && (
                <SimpleGallery
                    galleryID="product-lightbox"
                    images={galleryImages}
                    isOpen={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
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
                            <h1 className="text-gray-800 font-bold text-3xl">More about the product</h1>
                            <p className="mt-2 text-gray-600 text-lg">
                                This product is designed to offer both functionality and style, making it the perfect choice for any modern user. Crafted from premium materials, it ensures long-lasting durability and superior performance. With advanced features and a sleek design, it’s an essential addition to your collection.
                            </p>
                            <p className="mt-2 text-gray-600 text-lg">
                                Its user-friendly interface allows for easy handling, making it suitable for both beginners and experts alike. The product is equipped with the latest technology to provide unmatched efficiency, while its compact size makes it portable and easy to store.
                            </p>
                            <p className="mt-2 text-gray-600 text-lg">
                                Whether you're using it at home or on the go, you can rely on its consistent performance. The energy-efficient design helps save on electricity consumption, while the sleek finish adds a touch of elegance to any space. It’s available in a variety of colors to suit your personal style.
                            </p>
                            <p className="mt-2 text-gray-600 text-lg">
                                Backed by a strong warranty and excellent customer support, this product promises peace of mind. Don’t miss out on the opportunity to experience cutting-edge technology with this exceptional product. Add it to your cart today and see the difference it can make!
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
    );
};

export default HomeAppliances;
