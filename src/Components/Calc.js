import React from "react";
import { useState } from "react";
import SliderPanel from "./SliderPanel";


export default function Calc(){
    const [value, setValue] = useState(50);

    const handleChange = (event)=>{
        setValue(event.target.value);
    };

    return(
     <SliderPanel value={50}/> 
    )
}