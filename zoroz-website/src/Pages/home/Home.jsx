import React, { useContext } from 'react'
import { Layout } from '../../Components/layout/layout'
import myContext from '../../Context/data/myContext'
import HeroSection from "../../Components/heroSection/HeroSection";
import Filter  from "../../Components/filter/Filter";
import  ProductCard  from '../../Components/productCard/ProductCard';
import Testimonial from '../../Components/testimonial/Testimonial';
import Track from '../../Components/track/Track';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../../Redux/CartSlice';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=>state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  const context=useContext(myContext);
 
  return (
    <Layout>
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
      <Testimonial />
    </Layout>
  );
}
