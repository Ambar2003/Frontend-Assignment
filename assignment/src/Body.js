import React from "react"
import Progress from "./Progress"
import Summary from "./Summary"
import Payment from "./Payment"
const Body = () => {
  return (
    <div>
      <Progress></Progress>
      <div className="flex justify-evenly">
        <Summary></Summary>
        <Payment></Payment>
      </div>
    </div>
  )
}

export default Body
