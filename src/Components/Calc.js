import React from "react";
import SliderPanel from "./SliderPanel";


export default function Calc(props){
    return(
    <div>
        <SliderPanel field="monthlyInvestment" panelName="Monthly Investment (Rs.)" min={10000} max={1000000} value={props.mi} setVal={props.handleMi}/>
        <SliderPanel field="investmentPeriod" panelName="Investment Period (in years)" min={0} max={30} value={props.ip} setVal={props.handleIp} />
        <SliderPanel field="rateOfReturn" panelName="Expected Rate of Return(%p.a)" min={0} max={30}  value={props.ror} setVal={props.handleRor} />
        <SliderPanel field="rateOfInflation" panelName="Expected Rate of Inflation(%p.a)" min={0} max={30} value={props.roi} setVal={props.handleRoi} />
    </div>
    )
}   