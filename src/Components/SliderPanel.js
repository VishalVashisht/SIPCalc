import React from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';


const mark1 = [{
    value: 50000,
    label: '50000',
},
{
    value: 240000,
    label: '240000',
},
{
    value: 430000,
    label: '430000',
},
{
    value: 620000,
    label: '620000',
},
{
    value: 810000,
    label: '810000',
},
{
    value: 1000000,
    label: '1000000',
},
];


const mark2 = [{
    value: 0,
    label: '0',
},
{
    value: 6,
    label: '6',
},
{
    value: 12,
    label: '12',
},
{
    value: 18,
    label: '18',
},
{
    value: 24,
    label: '24',
},
{
    value: 30,
    label: '30',
},
];

function valuetext(value) {
    return `${value}`;
}

const Input2 = styled(MuiInput)`width: 110px;`;


export default function SliderPanel({ field, panelName, min, max, value, setVal }) {


    const handleSliderChange = (event, newValue) => {
        setVal(newValue);
    };

    const handleInputChange = (event) => {
        setVal(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <>
            <br />
            <div className={field}>
                <Box sx={{ width: 570, margin: 1 }}>

                    <div className="sliderhead">
                        <h3>{panelName}</h3>
                    </div>
                    <div className="Input">
                        <Grid className="demo" container>
                            <Input2
                                type="number"
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                inputProps={{
                                    step: 1,
                                    min: min,
                                    max: max
                                }}
                            />
                        </Grid>
                    </div>
                    <br />
                    <Grid className="slider">
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={value}
                            getAriaValueText={valuetext}
                            min={min}
                            max={max}
                            step={1}
                            marks={field === 'monthlyInvestment' ? mark1 : mark2}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            value={value}
                        />
                    </Grid>
                </Box>
            </div>
        </>
    )
}


