import Calc from "./Calc";
import Graph from "./Graph";
import { React, useState } from "react";

export default function SIPCalc(){
  const[mi, setValuemi] = useState(10000);

  const handleMi = (event)=>{
      setValuemi(mi);
  };

  const[ip, setValueip] = useState(5);

  const handleIp = (event)=>{
      setValueip(ip);
  };

  const[ror, setValueror] = useState(10);

  const handleRor = (event)=>{
      setValueror(ror);
  };

  const[roi, setValueroi] = useState(2);

  const handleRoi = (event)=>{
      setValueroi(roi);
  };

    return(
        <div className='white-div'>
          <br />
          <div className="whiteDivHeader">
            <h2>{"SIP Calculator"}</h2>
            <p>{"It tells you how much wealth you can create by making monthly investment"}</p>
          </div>
        <div className="leftPanel">
          <Calc 
            mi={mi}
            handleMi={setValuemi}
            ip={ip}
            handleIp={setValueip}
            ror={ror}
            handleRor={setValueror}
            roi={roi}
            handleRoi={setValueroi}/>
        </div>
        <div className="rightPanel">
        <Graph mi={mi} ip={ip} ror={ror} roi={roi}/>
        </div>
      </div>
    )
}