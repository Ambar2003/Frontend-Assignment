import React from "react";
import { address } from "./utils/constants";
import { payment } from './utils/constants';
import { shipping } from "./utils/constants";
const Progress = () => {
  return (
    <div className="p-5">
      <ul className="flex justify-evenly mx-24 text-gray-400">
      <li className="hidden md:block md:cursor-pointer">
        <img src = {address} alt = "address" className="h-8 mx-2"></img>
          <p>Step 1</p>
          <p>Address</p>
        </li>
        <li className="cursor-pointer">
        <img src = {shipping} alt = "shipping" className="h-8"></img>
          <p>Step 2</p>
          <p>Shipping</p>
        </li>
        <li className="text-black cursor-pointer">
        <img src = {payment} alt = "payment" className="h-8 mx-4"></img>
          <p>Step 3</p>
          <p>Payment</p>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
