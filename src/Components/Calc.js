import React from "react";
import SliderPanel from "./SliderPanel";


export default function Calc(){
    return(
    <div>
        <SliderPanel field="monthlyInvestment" panelName="Monthly Investment (Rs.)" min={50000} max={1000000}/>
        <SliderPanel field="investmentPeriod" panelName="Investment Period (in years)" min={0} max={30}/>
        <SliderPanel field="rateOfReturn" panelName="Expected Rate of Return(%p.a)" min={0} max={30}/>
        <SliderPanel field="rateOfInflation" panelName="Expected Rate of Inflation(%p.a)" min={0} max={30}/>
    </div>
    )
}