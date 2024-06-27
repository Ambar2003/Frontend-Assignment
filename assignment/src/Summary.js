import React from 'react'
import { iphone } from "./utils/constants";
import { airpod } from "./utils/constants";
import { applewatch } from './utils/constants';

const Summary = () => {
  return (
    <div className="hidden md:block md:my-[1rem]">
    <div>
      <h1 className="my-4 font-bold text-xl">
        Summary
      </h1>
      <ul className="flex justify-between bg-gray-100 rounded-lg my-3">
        <img src = {iphone} alt = "iphone" className="h-12"></img>
        <li className="mx-2 font-bold my-2">Apple Iphone 14 Pro Max 128 GB</li>
        <li className="justify-end font-bold">$1399</li>
      </ul>
      <ul className="flex bg-gray-100 rounded-lg">
      <img src = {airpod} alt = "airpod" className="h-12"></img>
        <li className="mx-[4rem] font-bold my-2">Airpods Max Silver</li>
        <li className="font-bold">$549</li>
      </ul>
      <ul className="flex justify-between bg-gray-100 rounded-lg">
      <img src = {applewatch} alt = "applewatch" className="h-8"></img>
        <li className="mx-2 font-bold">Apple Watch Series 9 GPS 41mm</li>
        <li className="font-bold">$399</li>
      </ul>
    </div>
    <h1 className="my-[0.5rem] text-sm">Address</h1>
    <p className="my-2">1131 Dusty Townline Jacksonville, TX 40322</p>
    <p className="text-sm my-2">Shipment method</p>
    <p>Free</p>
    <div>
    <ul className="flex justify-between bg-gray-100 rounded-lg my-3">
        <li className="mx-2 font-bold">Subtotal</li>
        <li className="justify-end font-bold">$2347</li>
      </ul>
      <ul className="flex justify-between bg-gray-100 rounded-lg my-3">
        <li className="mx-2">Estimated Tax</li>
        <li className="justify-end font-bold">$50</li>
      </ul>
      <ul className="flex justify-between bg-gray-100 rounded-lg my-3">
        <li className="mx-2">Estimated shipping & Handling</li>
        <li className="justify-end font-bold">$29</li>
        </ul>
        <ul className="flex justify-between bg-gray-100 rounded-lg my-3">
        <li className="mx-2 font-bold">Total</li>
        <li className="justify-end font-bold">$2426</li>
        
      </ul>
      </div>
    </div>
    
      )
}

export default Summary
