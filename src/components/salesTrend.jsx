// import Chart from 'react-apexcharts'
// import { barData } from "../data"

import {Chart as ChartJS} from 'chart.js'
import {Bar} from 'react-chartjs-2'

const SalesTrend = () => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    const prices = ['50', '5.000', '10.000', '20.000', '30.000', '40.000', '50.000' ]

    // const config = {
    //     options: {
    //         chart: {

    //         },

    //         xaxis: {
    //             categories: barData.map(data => data.month)
    //         }
    //     },
    //     series: {
    //         name: '',
    //         data: barData.map(data => data.amount),
            
            
    //     },
    //     labels:                                                                                                    ],
    // }
    const config = {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };

    return ( 
        <>
        <ChartJS />
        </>

        // <div /*className="gap-5 w-full"*/>

        //     <div className="grid grid-cols-trend gap-5">
        //         <div className="flex flex-col items-center gap-6 max-w-12 h-4/5">
        //             {
        //                 prices.map((price, idx) => (
        //                     <p key={idx} className="font-semibold text-xs text-trends">{price}</p>
        //                 ))
        //             }
        //         </div>

        //         <div className='grid items-center gap-3'>
        //             {
        //                 months.slice(0,10).map((_, idx) => (
        //                     <p key={idx} className=' w-full border-t border-dashed border-line'></p>
        //                 ))
        //             }
        //         </div>
        //     </div>


        //     <div className="grid grid-cols-trend gap-5">
        //         <div></div>
        //         <div className="flex justify-between items-center sm:w-696 md:w-full">
        //             {
        //                 months.map((month, idx) => (
        //                     <p key={idx} className="font-semibold text-sm text-trends">{month}</p>
        //                 ))
        //             }
        //         </div>
        //     </div>

        // </div>
    )
}

export default SalesTrend