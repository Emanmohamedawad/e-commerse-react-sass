import React, {useState}from "react";
import Adidas from "../Assets/addeds.svg";
import Img1 from "../../Images/mainImg.jpeg";
import Img2 from "../../Images/t2.jpeg";
import Img3 from "../../Images/t3.jpg";
import Img4 from "../../Images/t4.jpg";
import Color1 from "../../Images/color1.png";
import Color2 from "../../Images/color2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Productdetails.scss";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductDetails = ({ itemNumber, addItemToCart }) => {

   const item = {
      color: ["red", "black"],
      size: ["Ssmall", "Medium", "Large", "XLarge", "Xxlarge"],
      price: "9,999",
      discount: "30%",
      rating: "22",
   };

   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   return (
      <div className="productdetails">
         <p className="pt-3 tabs">
           <span>Men</span>  /<span>Clothing</span>  / <span>Tops</span>  / <span>Adidas</span>  /Adidas Black T-shirt
         </p>
         <hr />
         <div className="container py-3">
            <div className="row">
               {/* Slider-Images */}
               <div className="col-md-5">
                  {/* <img src={Img} alt="" className="w-100" /> */}

                  <Swiper
                     style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                     }}
                     loop={true}
                     spaceBetween={10}
                     navigation={true}
                     thumbs={{ swiper: thumbsSwiper }}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper2"
                  >
                     <SwiperSlide>
                        <img src={Img1} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={Img2} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide> 
                     <img src={Img3} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img4} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img1} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img2} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img3} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img4} alt="" className="w-100"/>
                     </SwiperSlide>
                  </Swiper>
                  <Swiper
                     onSwiper={setThumbsSwiper}
                     loop={true}
                     spaceBetween={10}
                     slidesPerView={4}
                     freeMode={true}
                     watchSlidesProgress={true}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper"
                  >
                     <SwiperSlide>
                        <img src={Img1} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src={Img2} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide> 
                     <img src={Img3} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img4} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img1} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img2} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img3} alt="" className="w-100" />
                     </SwiperSlide>
                     <SwiperSlide>
                     <img src={Img4} alt="" className="w-100"/>
                     </SwiperSlide>

                  </Swiper>

               </div>
               <div className="col-md-7">
                  <img src={Adidas} className="mb-4" alt="" />
                  <p className="w-50">
                     Adidas black t-shirt lorem ipsum dolor sit amet,
                     consectetuer adipiscing elit.
                  </p>
                  <p className="mb-3 text-muted">Men</p>

                  <div className="rate d-flex">
                     <i class="fa-solid fa-star mx-1 text-warning"></i>
                     <i class="fa-solid fa-star mx-1 text-warning"></i>
                     <i class="fa-solid fa-star mx-1 text-warning"></i>
                     <i class="fa-regular fa-star mx-1 text-warning"></i>
                     <p className="mx-2">4.9 of 5</p>
                     <p className="mx-2 text-muted">22 Rates</p>
                  </div>

                  <div className="price d-flex align-items-center">
                     <h4>
                        9,999<span>LE</span>
                     </h4>
                     <p className="mx-4 text-muted">9,999LE</p>
                     <div className="bgsale">30% Off</div>
                  </div>
                  <hr />

                  <div className="size">
                     <h4>Size</h4>
                     <div className="boxsize  d-flex align-items-center">
                        <div className="circilesize px-3 py-3 mx-2">Small</div>
                        <div className="circilesize px-2 py-3 mx-2">Medium</div>
                        <div className="circilesize p-3 mx-2">Large</div>
                        <div className="circilesize px-3 py-3 mx-2">Xlarge</div>
                        <div className="circilesize px-2 py-3 mx-2">
                           Xxlarge
                        </div>
                     </div>
                  </div>
                  <hr />

                  <div className="color">
                     <h4>Color</h4>
                     <div className="boxcolor  d-flex align-items-center">
                        <img className="mx-2 bordercolor" src={Color1} alt="" />
                        <img className="mx-2" src={Color2} alt="" />
                     </div>
                  </div>
                  <hr />

                  <div className="quantity">
                     <h4>Quantity</h4>
                     <div className="qunbtn d-flex justify-content-between align-items-center px-2 py-1 my-4">
                     <button className="btndecrease px-2 ">-</button>
                        <label>1</label>
                        <button className="btnincrease px-2 ">+</button>
                     </div>
                     <div className="btns d-flex align-items-center">
                        <button
                           className="btnadd px-5 py-2"
                           onClick={() => addItemToCart(item)}
                        >
                           Add To Cart
                        </button>
                        <button className="btnpick px-5 py-2 mx-3">
                           Pickup From Store
                        </button>
                     </div>
                  </div>
                  <hr />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;
