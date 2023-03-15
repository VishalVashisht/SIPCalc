import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";


export default function Graph(props) {

    const monInvest = props.mi;
    const rate = (props.ror - props.roi) / 12
    const months = props.ip*12;
    let sipGrowthResult = 0;
    let totalInvestment=0;

    const graph = [{
        year: 0,
        investment: 0,
        value: 0,
      }]
      for (let i = 1; i <= months; i++) {
        sipGrowthResult += monInvest * Math.pow(1 + rate / 100, i)
        totalInvestment += monInvest
        if(i%12 == 0){
          const obj = {
            year: i/12,
            investment: monInvest * i,
            value: Math.round(sipGrowthResult)
          }
          graph.push(obj)
          console.log(obj)
        }
      }

      function toIndianRupees(sum){
  return sum.toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}

    return (
        <>
            <div className='graphHeader'>
                <p className='graph-text'>After <span className="timeperiod"> <b>{props.ip} years</b> </span>, you will have<br />
                    <span> <h2 className='totalamount'> <b> ₹ {toIndianRupees(sipGrowthResult.toFixed(0))}</b></h2> </span>
                    That's <span> <b className='potentialcapitalgain'>₹ {toIndianRupees((sipGrowthResult-totalInvestment).toFixed(0))}</b> </span> as potential capital gains <br /> on your investment of
                    <span> <b className="monthlyinvestment">₹ {toIndianRupees(totalInvestment)}</b>  </span>
                </p>
            </div>

            <div className="graphFooter">
                <ResponsiveContainer width={550} aspect={1.4}>
                    <LineChart data={graph} width={500} height={550} >
                        <XAxis dataKey="year" stroke= "#000000" fontWeight="bold"  />
                        <YAxis dataKey="value" width={90} stroke= "#000000" fontWeight="bold"/>
                        <Tooltip/>
                        <Line 

                            type="monotone"
                            dataKey="value"
                            stroke="#5B1EAF"
                            r={0}

                        />
                        <Line 
                            type="monotone"
                            dataKey="investment"
                            stroke="#717FEC"
                            r={0}
                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}