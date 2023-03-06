import react from "react";

export default function SliderComponent({value, handleChange, min, max, step}) {
    return(
        <div className="slider">
            <input 
                type="range" 
                defaultValue={value} 
                onChange={handleChange}
                min={min} 
                max={max}
                step={step}/>
        </div>
    )
}