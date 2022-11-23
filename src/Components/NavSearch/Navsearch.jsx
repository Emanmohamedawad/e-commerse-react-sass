import React from "react";
import "./NavSearch.scss";
import Addids from "../Assets/addeds.svg";
// import Box from "../Assets/cartbox.svg";
import Modelcart from "./../Model/Modelcart";

const Navsearch = ({ itemNumber }) => {
   return (
      <div className="navsearch py-3">
         <div className="container">
            <div className="row first-row">
               <div className="col-md-3">
                  <div class="form-outline position-relative">
                     <input type="search" id="form1" class="form-control" />
                     <div className="position-absolute top-0 start-0 px-3 py-2">
                        <i class="fa-solid fa-magnifying-glass px-2"></i>
                        <label>Search</label>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div>
                     <img src={Addids} alt="" />
                  </div>
               </div>

               <div className="col-md-5 d-flex justify-content-end align-items-center">
                  <Modelcart itemNumber={itemNumber} />

                  <div className="call d-flex mx-2  align-items-center">
                     <i class="fa-regular fa-heart fs-4 px-2"></i>
                     <h6>Wishlist</h6>
                  </div>
                  <div className="call d-flex   align-items-center">
                     <i class="fa-regular fa-user fs-4 px-2"></i>
                     <h6>Login</h6>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navsearch;
