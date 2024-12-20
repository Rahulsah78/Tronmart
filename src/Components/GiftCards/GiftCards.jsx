import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Layout from "../Layout/Layout";
import { useEffect } from 'react';

const GiftCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <div className="bg-[#F7FAFD] min-h-screen">
        <div className="h-72">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full"
          >
            <SwiperSlide>
              <div className="h-full flex items-center justify-center bg-blue-300">
                <img src="/GiftCard/gift1.jpg" alt="gift" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full flex items-center justify-center bg-green-300">
                <img src="/GiftCard/gift2.jpg" alt="gift" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full flex items-center justify-center bg-yellow-300">
                <img src="/GiftCard/gift3.jpg" alt="gift" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='md:px-10 p-5'>
          <h1 className="md:text-3xl text-3xl  font-bold text-gray-500 mb-8">
            Gift Cards
          </h1>

          {/* Gift Card Description */}
          <div className="max-w-4xl  mb-12">
            <p className="md:text-lg text-sm text-gray-600">
              Give the perfect gift with our Gift Cards! Whether it’s for a birthday,
              anniversary, or just because, our gift cards make the perfect present.
              Choose the amount, and send a thoughtful gift to your loved ones today!
            </p>
          </div>

          <div>
            <div data-aos="fade-up" className="md:h-[50vw] w-full space-y-5">
              <div className="h-1/2 md:flex gap-5">
                <div className="h-full p-4">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/BGCLP_D_Movie.jpg"
                    alt="Movie Gift Card"
                    className="h-full w-full md:object-cover rounded-md"
                  />
                </div>
                <div className="h-full p-4 md:mt-0 mt-5 ">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/BGCLP_D_Restaurant.jpg"
                    alt="Restaurant Gift Card"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="h-1/2 md:flex gap-5">
                <div className="h-full p-4 ">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/BGCLP_D_Style.jpg"
                    alt="Style Gift Card"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="h-full p-4 md:mt-0 mt-5  ">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/BGCLP_D_Travel.jpg"
                    alt="Travel Gift Card"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default GiftCards;
