import React from 'react'
import Menu from '../Assets/menu.svg';
import Logo from "../Assets/logoname2.svg";
import Call from "../Assets/call.svg";
import Cart from "../Assets/cart.svg";
import Location from "../Assets/location.svg";



import './Navbar.scss';

const Navbar = () => {
  return (
   <div className='nav py-3'>
      <div className='container'>
      <div className="row first-row">
         <div className='col-md-2'>
            <img src={Menu} alt=""/>
            <img className='px-2' src={Logo} alt=""/>
         </div>

         <div className='col-md-5 d-flex justify-content-center'>
            <i class="fa-solid fa-angle-left"></i>
            <p className='px-2'>Valentine’s Day Offers! Buy Two Get One Free <span> Shop Now</span></p>
            <i class="fa-solid fa-angle-right"></i>
         </div>

         <div className='col-md-5 d-flex justify-content-end align-items-center'>
            <div className='call d-flex mx-2 justify-content-start  align-items-center'>
            <img className='px-1' src={Call} alt=""/>
            <h6>Cart</h6>
            </div>
            <div className='call d-flex mx-2  align-items-center'>
            <img className='px-1' src={Cart} alt=""/>
            <h6>Wishlist</h6>
            </div>
            <div className='call d-flex mx-2  align-items-center'>
            <img className='px-1' src={Location} alt=""/>
            <h6>Login</h6>
            </div>
         </div>
      </div>
      </div>
   </div>

  )
}

export default Navbar
