import React from 'react'
import twitter from "./utils/twitter.png"
import { facebook } from "./utils/constants";
import { tiktok } from './utils/constants';
import { instagram } from "./utils/constants";

const Footer = () => {
  return (
    <div className="bg-gray-950">
    <div className="flex-none text-center md:flex justify-evenly text-white">
     <div className="sm: p-8 ">
        <h1 className="font-bold text-lg">Cyber</h1>
        <p className="w-96 text-xl">We are a residential interior design firm located in Portland. Our boutique studio offers more than</p>
        </div>
        <div className="p-8">
            <h2 className="font-bold text-2xl">Services</h2>
            <ul className="cursor-pointer">
                <li className = "text-xl">
                    Bonus Program
                </li>
                <li className = "text-xl">
                    Gift Cards
                </li>
                <li className = "text-xl">
                    Credit and Payment
                </li>
                <li className = "text-xl">
                    Service Contracts
                </li>
                <li className = "text-xl">
                    Non-cash account
                </li>
                <li className = "text-xl">
                    Payment
                </li>
            </ul>
        </div>
        <div className="py-8">
            <h2 className = "font-bold text-2xl">Assistance to the buyer</h2>
            <ul className="cursor-pointer">
                <li className = "text-xl">
                    Find an Order
                </li>
                <li className = "text-xl">
                    Terms of Delivery
                </li>
                <li className = "text-xl">
                    Exchange and return of goods
                </li>
                <li className = "text-xl">
                    Guarantee
                </li>
                <li className = "text-xl">
                    Frequently asked questions
                </li>
                <li className = "text-xl">
                    Terms of use of the site
                </li>
            </ul>
        </div>
        </div>
        <div className="flex mx-24 md:flex-row md:mx-40">
            <img src = {twitter} alt = "twitter" className="w-20 h-32 cursor-pointer"></img>
            <img src = {facebook} alt = "facebook" className="w-20 h-32 cursor-pointer"></img>
            <img src = {tiktok} alt = "tiktok" className="w-20 h-32 cursor-pointer"></img>
            <img src = {instagram} alt = "instagram" className="w-20 h-32 cursor-pointer"></img>

        </div>
    </div>
        
     
  )
}

export default Footer;
