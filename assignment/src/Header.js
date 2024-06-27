import React from 'react'
import heart from "./utils/heart.png";
import cart from "./utils/cart.png";
import user from "./utils/user.png";
import company from "./utils/company.png"
import { hamburger } from './utils/constants';
import { useState } from 'react';
const Header = () => {
  const openOptions = () =>{

  }
  return (
    <div className="flex justify-evenly py-6 bg-white  text-gray-400 text-xl">
    <div className="cursor-pointer py-1">
      <img src = {company} alt = "company-logo" className="h-8"></img>
      
      </div>
      <div> 
      <input type = "text" placeholder="🔍Search" className="hidden md:block md:bg-slate-200 py-1 text-black" >
      </input>
      </div>
      <div className="hidden md:block cursor-pointer text-black py-1">Home</div>
      <div className="hidden md:block cursor-pointer hover:text-black py-1">About</div>
      <div className="hidden md:block cursor-pointer hover:text-black py-1">Contact Us</div>
      <div className="hidden md:block cursor-pointer hover:text-black py-1">Blog</div>
      <div>
        <img src = {heart} alt = "heart" className="hidden md:block cursor-pointer py-1"></img>
        </div>
      <div>
        <img src = {cart} alt = "cart" className="hidden md:block cursor-pointer py-1"></img>
      </div>
      <div>
        <img src = {user} alt = "user" className="hidden md:block cursor-pointer py-1"></img>
      </div>
        <img src={hamburger} alt = "hamburger-button"  className = "md:hidden h-12 cursor-pointer" onClick={openOptions}>
        </img>
        </div>
  )
}

export default Header;
