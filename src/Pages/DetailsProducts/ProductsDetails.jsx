import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import todaydeals from '../../AlllJsonData/Todaybest/Todaybest.json';
import Layout from '../../Components/Layout/Layout';
import { IoSearchOutline } from 'react-icons/io5';
import SimpleGallery from "../Simple/SimpleGallery"
import relatedata from "../../AlllJsonData/RelatedProducts/RelatedProducts.json";

const ProductsDetails = () => {
    const { detailsId } = useParams();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const product = todaydeals.find((item) => item.id === parseInt(detailsId));

    if (!product) {
        return <h2 className="text-center text-red-500">Product not found!</h2>;
    }

    const handleSearchClick = () => {
        const images = [
            { largeURL: product.img, thumbnailURL: product.img, width: 800, height: 600 },
        ];
        setGalleryImages(images);
        setLightboxOpen(true);
    };

    const [showDescription, setShowDescription] = useState(true); // Default to show description

    const handleTabClick = (tab) => {
        if (tab === 'description') {
            setShowDescription(true);
        } else if (tab === 'review') {
            setShowDescription(false);
        }
    };

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
        <Layout>
            <div className="p-10 bg-[#F7FAFD] min-h-screen flex flex-col lg:flex-row">
                {/* Product Image */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="relative overflow-hidden hover:cursor-crosshair flex flex-col gap-10 bg-white shadow-md items-center justify-center w-full lg:w-[40%]"
                >
                    <img
                        src={product.img}
                        alt={product.name}
                        className="h-full object-cover"
                        style={{
                            transform: isHovering ? `scale(1.5)` : 'scale(1)',
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                    />
                    {/* Search Icon */}
                    <div className="absolute top-3 rounded-full right-3 h-10 w-10 bg-blue-500 flex items-center justify-center">
                        <button className="text-2xl text-white" onClick={handleSearchClick}>
                            <IoSearchOutline />
                        </button>
                    </div>
                    <div className="flex pb-5 gap-4">
                        <div className="items-start h-[10vw] w-36 bg-white"></div>
                        <div className="items-start h-[10vw] w-36 bg-white"></div>
                        <div className="items-start h-[10vw] w-36 bg-white"></div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="p-5 pt-5 h-auto lg:h-[45vw] w-full lg:w-[60%]">
                    <h2 className="md:text-2xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    {/* Price and Discount */}
                    <div className="pt-5 flex gap-3">
                        <label className="font-semibold">
                            Rs{(product.price - (product.price * product.discount) / 100).toFixed()}
                        </label>
                        <del className="text-gray-600">Rs{product.price}</del>
                        <label className="text-red-600">({product.discount}% OFF)</label>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                        <ul className="list-disc pl-14 text-gray-700">
                            {product.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Quantity and Cart Buttons */}
                    <div className="flex flex-wrap gap-5 items-center mt-6">
                        <div className="flex items-center gap-2">
                            <button
                                // onClick={handleDecrement}
                                className="font-bold text-lg px-4 py-2 border bg-white"
                            >
                                -
                            </button>
                            <span className="font-bold text-lg px-4 py-2 border bg-gray-100">
                                {/* {quantity} Display the quantity here */}
                            </span>
                            <button
                                // onClick={handleIncrement}
                                className="font-bold text-lg px-4 py-2 border bg-white"
                            >
                                +
                            </button>
                        </div>
                        <button
                            // onClick={handleAddToCart}
                            className="px-6 py-3 bg-blue-500 text-white font-semibold w-fit"
                        >
                            Add to Cart
                        </button>
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

export default ProductsDetails;
