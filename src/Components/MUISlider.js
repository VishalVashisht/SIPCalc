import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

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


const mark2 = [  {
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



export default function MUISlider({value, handleChange, min, max, step, field}){
    return (
        <div className='container'>
        <Box  sx={{ width:570, margin:1}}>
          <Slider
            defaultValue={value} 
            onChange={handleChange}
            min={min} 
            max={max}
            step={step}
            marks={field==='monthlyInvestment' ? mark1 : mark2}
            valueLabelDisplay="auto"
          />
          
          <Grid className="demo" container>
                <Grid item>
                    <Typography gutterBottom>
                    {titleArr[index]}
                    </Typography>
                </Grid>

                <Grid item>
                
                <Input2  
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        inputProps={{
                            step: 1,
                            min: mn,
                            max: mx,
                        }}
                        />
                    
                </Grid>
                
            </Grid>
        </Box>
        </div>
      );
}