import React from "react";
import Imgfooter from "../../Images/Logofooter.svg";
import Facebook from "../../Images/facebook.svg";
import Linked from "../../Images/linkedin.svg";
import Insta from "../../Images/insta.svg";
import Twiteer from "../../Images/twiter.svg";
// pay
import Pay1 from "../../Images/payment1.png";
import Pay2 from "../../Images/pay2.png";
import Pay3 from "../../Images/pay3.png";
import Navnas from "../../Images/navnas.png";

import "./Footer.scss";

const Footer = () => {
   return (
      <div className="footer py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-5">
                  <img src={Imgfooter} alt="" className="w-50 mb-4" />
                  <p>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                     sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                     magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                     quis nostrud exerci tation ullamcorper suscipit lobortis
                     nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                     iriure dolor in hendrerit in vulputate velit esse molestie
                     consequat, vel illum dolore eu feugiat nulla. Lorem ipsum
                     dolor sit amet, consectetuer adipiscing elit, sed dia m
                     nonummy nibh euismod tincidunt ut laoreet dolore magna
                     aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                     nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                     aliquip ex ea commodo consequat. Duis autem vel eum iriure
                     dolor in hendrerit in vulputate velit esse molestie
                     consequat, vel illum dolore eu feugiat nulla facilisis at
                     vero eros et accumsan et iusto odio dignissim qui blandit
                  </p>
               </div>
               {/* side-2 */}
               <div className="dataside col-md-7 px-4">
                  <h4>Subscribe to our newsletter</h4>
                  <div className="email my-4 position-relative">
                     <input
                        type="email"
                        class="emailinput form-control  px-3"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Email..."
                     />
                     <button className="btnsub text-center position-absolute ">
                        Subscribe <i class="fa-regular fa-paper-plane px-2"></i>
                     </button>
                  </div>
                  <div className="linkside d-flex justify-content-between  px-4">
                     <div className="leftside">
                        <a className="my-3 d-block" href="/#">
                           About Us
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Contact Us
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Track Order
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Terms & Conditions
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Privacy Policy
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Sell With Us
                        </a>
                        <a className="my-3 d-block" href="/#">
                           Shipping And Returns
                        </a>
                     </div>
                     <div className="righ">
                        <div className="d-flex mx-2 my-3">
                           <img src={Facebook} alt="" className="mx-2" />
                           <a href="/#">/YESHTERY</a>
                        </div>
                        <div className="d-flex mx-2 my-3">
                           <img src={Linked} alt="" className="mx-2" />
                           <a href="/#">/YESHTERY</a>
                        </div>
                        <div className="d-flex mx-2 my-3">
                           <img src={Insta} alt="" className="mx-2" />
                           <a href="/#">/YESHTERY</a>
                        </div>
                        <div className="d-flex mx-2 my-3">
                           <img src={Twiteer} alt="" className="mx-2" />
                           <a href="/#">/YESHTERY</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className="copy py-2 mt-4 d-flex justify-content-between">
               <div className="firsttext">
                  <p>© 2021 yeshtery, all rights reserved.</p>
               </div>
               <div className="paymentmethod d-flex">
                  <img src={Pay1} alt="" className="mx-1" />
                  <img src={Pay2} alt="" className="mx-1" />
                  <img src={Pay3} alt="" className="mx-1" />
               </div>
               <div className="paymentmethod d-flex">
                  <p className="mx-2">Powered By</p>
                  <img src={Navnas} alt="" className="navnas" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
