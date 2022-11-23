import React from "react";
import "./Navlink.scss";

const Navlink = () => {
   return (
      <div className="navlink py-2">
         <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark ">
               <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav d-flex justify-content-between w-100">
                     <li class="nav-item ">
                        <a class="nav-link " href="/#">
                           Man
                        </a>
                     </li>
                     <li class="nav-item px-3 mx-4">
                        <a class="nav-link " href="/#">
                           Women
                        </a>
                     </li>
                     <li class="nav-item px-3 mx-4">
                        <a class="nav-link " href="/#">
                           Unisex
                        </a>
                     </li>
                     <li class="nav-item px-3 mx-4">
                        <a class="nav-link " href="/#">
                           Kids
                        </a>
                     </li>
                     <li class="nav-item px-3 mx-4">
                        <a class="nav-link " href="/#">
                           Best Sellers
                        </a>
                     </li>
                     <li class="nav-item px-3 mx-4">
                        <a class="nav-link " href="/#">
                           New Arrivals
                        </a>
                     </li>
                     <li class="nav-item  text-align-end">
                        <a class="nav-link link-offer " href="/#">
                           Offers
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Navlink;
