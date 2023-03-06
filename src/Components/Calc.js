import React from "react";
import { useState } from "react";
import SliderComponent from "./Slider";


export default function Calc(){
    const [value, setValue] = useState(50);

    const handleChange = (event)=>{
        setValue(event.target.value);
    };

    return(
        <>
        <br />
        <div className="calc">
            <div className="mothlyInvestmetDiv">
                <h3>{"Monthly Investment"}</h3>
                <textarea  name="" id="" cols="10" rows="1" value={value}></textarea>
                <SliderComponent value={value} handleChange={handleChange} min={50000} max={1000000} step={50000}/>
            </div>
            <br />
            <br />
            <div className="investmentPeriodDiv">
            <h3>{"Investment Period (in years)"}</h3>
                <textarea  name="" id="" cols="10" rows="1" value={value}></textarea>
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
            </div>
            <br />
            <br />
            <div className="eRateOfReturn">
            <h3>{"Expected Rate of Return"}</h3>
                <textarea  name="" id="" cols="10" rows="1" value={value}></textarea>
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
            </div>
            <br />
            <br />
            <div className="eRateOfInflation">
            <h3>{"Expected Rate of Inflation"}</h3>
                <textarea  name="" id="" cols="10" rows="1" value={value}></textarea>
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
            </div>
        </div>
        </>
    )
}