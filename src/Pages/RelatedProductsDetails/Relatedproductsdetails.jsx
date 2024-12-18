import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import audiodata from "../../AlllJsonData/audioandvideo/audioandvideo.json"
import Layout from '../../Components/Layout/Layout';
import { IoSearchOutline } from 'react-icons/io5';
import SimpleGallery from "../Simple/SimpleGallery"

import relatedata from "../../AlllJsonData/RelatedProducts/RelatedProducts.json";


const Relatedproductsdetails = () => {
    const { relatedtId } = useParams();

    const relatedproduct = relatedata.find((item) => item.id === parseInt(relatedtId));

    if (!relatedproduct) {
        return <h2 className="text-center text-red-500">Product not found!</h2>;
    }

    // by default on top 
    useEffect(() => (
        window.scroll(0, 0)
    ), []);

    const handleSearchClick = () => {
        const images = [
            { largeURL: relatedproduct.img, thumbnailURL: relatedproduct.img, width: 800, height: 600 },
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
    return (
        <>
            <Layout>
                <div className="md:p-10 p-5 bg-[#F7FAFD] min-h-screen flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="relative flex flex-col gap-6 bg-white shadow-md items-center justify-center w-full md:w-[40%] ">
                        <img
                            src={relatedproduct.img}
                            alt={relatedproduct.name}
                            className="h-full object-cover"
                        />
                        {/* Search Icon */}
                        <div className="absolute top-3 right-3 h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full">
                            <button
                                className="text-2xl text-white"
                                onClick={handleSearchClick}
                                aria-label="Search product"
                            >
                                <IoSearchOutline />
                            </button>
                        </div>
                        
                    </div>

                    {/* Product Details */}
                    <div className="md:p-10 p-5 flex flex-col gap-6 w-full md:w-[60%]">
                        <h2 className="md:text-2xl font-bold text-gray-800">{relatedproduct.name}</h2>
                        <p className="text-gray-600">{relatedproduct.description}</p>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-green-500">
                                ${relatedproduct.price.toFixed(2)}
                            </span>
                            {relatedproduct.discount && (
                                <del className="text-red-400">
                                    ${(relatedproduct.price + relatedproduct.price * (relatedproduct.discount / 100)).toFixed(2)}
                                </del>
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                {relatedproduct.keyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="flex items-center">
                                <button className="px-4 py-2 border bg-white font-bold">-</button>
                                <span className="px-4 py-2 border bg-[#F7FAFD]">1</span>
                                <button className="px-4 py-2 border bg-white font-bold">+</button>
                            </div>
                            <button

                                className="px-6 py-3 bg-blue-500 text-white font-semibold"
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

                                    // <Link to={`/relatedproductdetails/${item.id}`}>
                                    <div key={item.id} className='mt-50 md:h-[38vw] md:w-[22vw] bg-white'>
                                        <img src={item.img} alt={item.name} />
                                        <div className='flex flex-col'>
                                            <span className='pt-2 text-yellow-500 text-xl'>{item.rating}</span>
                                            <label className='text-xl font-bold text-gray-400'>{item.name.slice(0, 52)}</label>
                                            <small className='pt-4 font-semibold text-xl'>${item.price}</small>
                                        </div>
                                    </div>
                                    // </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Relatedproductsdetails
