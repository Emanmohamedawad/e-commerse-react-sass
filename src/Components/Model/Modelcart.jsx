import React from "react";
import Box from "../Assets/cartbox.svg";
import Img from "../../Images/t2.jpeg";
import './Modelcart.scss';

function Modelcart({ itemNumber }) {

   // let itemArr = [];
   let length = itemNumber.length ? itemNumber.length : 0;
   return (
      <>

         <div
            className="Cart d-flex mx-2 justify-content-start  align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
         >
            <div className="position-relative d-flex ">
               <div className="position-absolute t-0 r-0 boxnum d-flex justify-content-center align-items-center">
                  {length}
               </div>
               <img className="px-2" src={Box} alt="" />
            </div>

            <h6 style={{ marginLeft: "5px" }}>Cart</h6>
         </div>
         <div
            class="modal fade right"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header text-center">
                     {/* <h4 class="modal-title " id="exampleModalLabel">
                        My Cart
                     </h4> */}
                     <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body">
                     <h4 className="titlecart my-3 text-center">My Cart</h4>
                     <h6>Cart Summary</h6>
                     <div>
                        {itemNumber.map((item, index) => (
                           // <div>
                           //    <p>{item.price}</p>
                           // </div>
                           <div className="itembox d-flex p-2 my-3">
                                 <div className="imgside mt-2">
                                    <img src={Img} alt="" className="w-100 h-100"/>
                                 </div>
                                 <div className="itemdate">
                                 <p className="dec">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
                                 <p className="qu">Quantity: 1</p>
                                 <div className="d-flex justify-content-between align-items-center">
                                 <h6>9,999 LE</h6>
                                 <button className="btnremove">Remove</button>
                                 </div>
                                 </div>
                                 
                           </div>
                           
                        ))}
                     </div>
                     {itemNumber.length === 0 ? <p className="text-center text-muted">Empty Cart...</p> :<h4 className="text-center bolder">Total: 19,999 LE</h4>  }
                     
                     
                     <div className="btncart d-flex justify-content-around align-items-center my-4">
                     <button className="btnreview px-2 py-1">Review Cart</button>
                     <button className="btncheck px-2 py-1">Complete Checkout</button>
                     </div>

                  </div>

               </div>
            </div>
         </div>
      </>
   );
}

export default Modelcart;
