import React from 'react'
import creditCard from "./utils/credit-card.png";
const Payment = () => {
  return (
    <div>
    <div>
    <div>
    <h1 className = "my-5 font-bold text-xl">
    Payment
    </h1>
    <div className="text-xl text-gray-500">
        <ul className="flex text-lg ">
            <li className="mx-4 custom-underline text-black cursor-pointer"> Credit Card</li>
            <li className="mx-4 custom-hover-underline text-black cursor-pointer">PayPal</li>
            <li className="custom-hover-underline text-black cursor-pointer">PayPal Credit</li>
        </ul>
        <img alt = "credit-card" className="mx-4 my-8 w-60 md:w-48" src = {creditCard}></img>
        <div className="w-44">
          <input placeholder="Cardholder Name" className="my-5">
          </input>
          <input placeholder="Card Number"  className="my-5">
          </input>
          <div className="flex">
          <input placeholder="Expiry Date"  className="my-5">
          </input>
          <input className="h-8 my-5 mx-4" placeholder="CVV"></input>
          </div>
          </div>
    </div>
    </div>
    <div className="text-sm flex">
    <input type = "checkbox" className="bg-black"></input>
      Same as Billing Address
    </div>
    </div>
    <div>
  <button className="bg-slate-400 px-5 py-5  rounded-lg my-11 w-40 hover:bg-slate-500">Back</button>
  <button className="mx-7 px-5 py-5 bg-slate-800  hover:bg-black rounded-lg text-white w-40">Pay</button>
</div>

  </div>
    
  )
}

export default Payment;
