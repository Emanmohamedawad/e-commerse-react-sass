import React, { useState} from "react";
import Navlink from "../Components/NavLink/Navlink";
import Navsearch from "../Components/NavSearch/Navsearch";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Navbar from "./../Components/Navbar/Navbar";
// import $ from "jquery";
import Footer from "../Components/Footer/Footer";
import SimilarProduct from "../Components/SimilarProduct/SimilarProduct";




const Home = () => {

   // const [number, setNumber] = useState(0);
   const [itemNumber, setItemNumber] = useState([]);
   const addItemToCart = (item) => {
      setItemNumber([...itemNumber, item]);
      alert("Product Added Successfully");
   };
   console.log(itemNumber);
   return (
      <div>
         <Navbar />
         <Navsearch itemNumber={itemNumber} />
         <Navlink />
         <ProductDetails
            addItemToCart={addItemToCart}
            itemNumber={itemNumber}
         />
         <SimilarProduct/>
         <Footer/>
      </div>
   );
};

export default Home;
