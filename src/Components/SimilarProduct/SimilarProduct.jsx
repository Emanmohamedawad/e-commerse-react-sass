import React from "react";
import {ProductData} from "../../Services.js";
// import Prod1 from './images/p1.png';
// import Prod1 from "../../Images/p1.png";
// import Prod2 from "../../Images/pro2.png";
// import Prod3 from "../../Images/pro3.png";
// import Prod4 from "../../Images/pro4.png";

import Adidas from "../../Images/prand.png";
import Img360 from "../../Images/360.png";


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SimilarProductstyle.scss";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const SimilarProduct = () => {
   return (
      <div className="similarproduct my-4">
         <div className="container">
            <h2>Similar Products</h2>
            <h6 className="text-muted">You may like these products also</h6>
            <div className="row">
               <Swiper
                  slidesPerView={4}
                  centeredSlides={false}
                  slidesPerGroupSkip={1}
                  grabCursor={true}
                  keyboard={{
                     enabled: true,
                  }}
                  breakpoints={{
                     769: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                     },
                  }}
                  scrollbar={true}
                  navigation={false}
                  pagination={{
                     clickable: false,
                  }}
                  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                  className="mySwiper my-4"
               >
                  {/* map-array in Product data */}
                  {ProductData.map((item, index) => (
                        <SwiperSlide key={index}>
                        <div className="card p-2  position-relative">
                        <div className="box-360">
                        <img src={Img360} className="img360 w-100" alt="" />
                        </div>
                        <img src={item.img} className="imgpro w-100" alt="" />
                        <p className="px-2 des">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <div className="price d-flex justify-content-between align-items-center">
                           <div className="price px-2">
                           <h4>{item.price}</h4>
                           <p className="d-inline">9,999 LE </p>
                           <span className="sale text-dark mx-2 border-2">{item.discount}</span>
                        </div>
                        <div>
                           <img src={Adidas} alt="" className="w-100"/>
                        </div>
                        </div>
                        <div className="rate d-flex justify-content-center align-items-center">
                        <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        </div>
                        <p className="mt-3 mx-3">{item.rating}</p>
                        </div>

                        <div className="text-center mall">
                        <p>Pickup From: <span> Genena Mall</span></p>
                        </div>
                        
                     </div>
                  </SwiperSlide>
                  ))}
                  
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default SimilarProduct;
