import React from "react";
import { useState } from "react";
import SliderComponent from "./Slider";

export default function SliderPanel(props){
    const[value, setValue] = useState(0);

    const handleChange = (event)=>{
        setValue(event.target.value);
        // setValue(document.getElementById(props.field).value);
    };
    
    return(
        <>
        <br />
        <div className="calc">
            <div className={props.field}>
                <div>
                <h3>{props.panelName}</h3>
                <input className="Input" type="int" value={value} />
                </div>
                <br />
                <SliderComponent value={value} handleChange={handleChange} min={props.min} max={props.max} step={1}/>
                <svg width="100%" height="25">
                    <line
                    x1="4"
                    y1="0"
                    x2="580"
                    y2="0"
                    stroke="#444"
                    stroke-width="20"
                    stroke-dasharray="1 50"
                />
            </svg>
            </div>
            {/* <br />
            <br />
            <div className="investmentPeriodDiv">
                <div>
                <h3>{"Investment Period (in years)"}</h3>
                <input id="monthlyinvestment" className="Input" type="int" value={value} />
                </div>
                <br />
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
                <svg width="200%" height="25">
              <line
                x1="4"
                y1="0"
                x2="580"
                y2="0"
                stroke="#444"
                stroke-width="20"
                stroke-dasharray="1 50"
              />
            </svg>
            </div>
            <br />
            <br />
            <div className="eRateOfReturn">
                <div>
                <h3>{"Expected Rate of Return(%p.a)"}</h3>
                <input id="rateOfReturn" className="Input" type="float" value={value} />
                </div>
                <br />
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
                <svg width="100%" height="25">
                    <line
                    x1=""
                    y1="0"
                    x2="580"
                    y2="0"
                    stroke="#444"
                    stroke-width="20"
                    stroke-dasharray="1 50"
                    />
                </svg>
            </div>
            <br />
            <br />
            <div className="eRateOfInflation">
                <div>
                <h3>{"Expected Rate of Inflation(%p.a)"}</h3>
                <input id="rateOfInflation" className="Input" type="float" value={value} />
                </div>
                <br />
                <SliderComponent value={value} handleChange={handleChange} min={1} max={30} step={1}/>
                <svg width="100%" height="25">
                    <line
                    x1="4"
                    y1="0"
                    x2="580"
                    y2="0"
                    stroke="#444"
                    stroke-width="20"
                    stroke-dasharray="1 50"
                    />
                </svg>
            </div> */}
        </div>
        </>
    )
}