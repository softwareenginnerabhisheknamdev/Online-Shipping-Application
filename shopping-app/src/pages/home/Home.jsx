import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productcard/ProductCard';
// import ProductCard from '../../components/productcard/ProductCard';
import Check from '../../components/check/Check';
import Track from '../../components/track/Track';
// import Footer from '../../components/footer/Footer';
// import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";

import {useDispatch,useSelector} from 'react-redux'
import { addToCart,deleteFromCart } from '../../redux/cartSlice';
import { MenuButton } from '@headlessui/react';
function Home() {
        const dispatch=useDispatch();
       const cartItem= useSelector((state)=> state.cart);
       console.log(cartItem);

       const addCart=()=>{
        dispatch(addToCart("shirt"));
       }
       const deleteCart=()=>{
        dispatch(deleteFromCart('shirt'));
       }
  
  return (
    <div>
      <Layout>
        <div className="flex gap-5 justify-center">
          <button onClick={() => addCart()}></button>
          <button onClick={() => deleteCart()}></button>
        </div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <div className="flex justify-center -mt-10 mb-4">
          <Link to={"/allproducts"}>
            <button className=" bg-gray-300 px-5 py-2 rounded-xl">
              See more
            </button>
          </Link>
        </div>
        <Track />
        <Check />
        {/* <Footer/> */}
      </Layout>
    </div>
  );
}

export default Home
