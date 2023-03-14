import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Array = [
    {
        name: "",
        student: 0,
        fees: 0
    },
    {
        name: 'Python',
        student: 13,
        fees: 10
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    }
]


function datamaker(props){
    const monInvest = props.mi;
    const rate = (props.ror - props.roi) / 12
    const months = props.ip*12;
    const returnSip = 0;

    const graph = [{
        year: 0,
        investment: 0,
        value: 0
      }]
      for (let i = 1; i <= months; i++) {
        returnSip += monInvest * Math.pow(1 + rate / 100, i)
        if(i%12 == 0){
          const obj = {
            year: i/12,
            investment: monInvest * i,
            value: Math.round(returnSip)
          }
          graph.push(obj)
        }
      }
}



export default function Graph(props) {

    const monInvest = props.mi;
    const rate = (props.ror - props.roi) / 12
    const months = props.ip*12;
    let sipGrowthResult = 0;

    const graph = [{
        year: 0,
        investment: 0,
        value: 0,
      }]
      for (let i = 1; i <= months; i++) {
        sipGrowthResult += monInvest * Math.pow(1 + rate / 100, i)
        if(i%12 == 0){
          const obj = {
            year: i/12,
            investment: monInvest * i,
            value: Math.round(sipGrowthResult)
          }
          graph.push(obj)
        }
      }

      console.log(graph);

    return (
        <>
            <div className='graphHeader'>
                <p className='graph-text'>After <span className="timeperiod"> <b>{props.ip} years</b> </span>, you will have<br />
                    <span className='totalamount'> <b>₹999</b> </span>
                    <br />That's <span className='potentialcapitalgain'> <b>₹999</b> </span> as potential capital gains <br /> on your investment of
                    <span className="monthlyinvestment"> <b>₹{props.mi}</b>  </span>
                    <br />
                    <br />
                </p>
            </div>

            <div className="graphFooter">
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <LineChart data={graph} width={800} height={800} margin={{ top: 35, right: 10, left: 15, bottom: 10 }}>
                        <XAxis dataKey="year" />
                        <YAxis dataKey="investment" width={100} />
                        <Tooltip/>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#350097"
                            // activeDot={{ r: 8 }}
                             />

                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="green"
                            // activeDot={{ r: 8 }} 
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}