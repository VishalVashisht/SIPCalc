import React from "react";
import Calc from "./Calc";

export default function SIPCalc(){

    return(
        <div className='white-div'>
          <br />
          <div className="whiteDivHeader">
            <h2>{"SIP Calculator"}</h2>
            <p>{"It tells you how much wealth you can create by making monthly investment"}</p>
          </div>

        <div className="leftPanel">
          <Calc/>
        </div>

        <div className="rightPanel">
          <h1>{"Vishal"}</h1>
        </div>

      </div>
    )
}