import Sidebar from "../components/sidebar"
import Header from "../components/header";
import Platform from "../components/platform";
import MonthlyOverview from "../components/monthlyOverview";
import SalesTrend from "../components/salesTrend";
import Customer from "../components/customer";
import './dashboard.css'
import Arrow from '../assets/icons/Arrow---Down-2.png'


import { platform, allUser, monthlyOverview } from "../data";

const Dashboard = () => {
  return (
    <div className="block md:grid md:grid-cols-layout">
        <Sidebar />
        <div className="grid grid-rows-dashboard h-screen">
            <Header />

            <main className="tab p-2.5 md:p-5 gap-5 grid lg:grid-cols-main md:grid-rows-mainH bg-header-bg items-center md:items-start">

                <div className=" resp base-style flex flex-col gap-5 hover:shadow-2xl cursor-pointer transition duration-500 ease-in-out">
                    <div className="flex justify-between items-center">
                        <p className="heading">Sales Trends</p>

                        <div className="flex gap-2.5 items-center">
                            <p className="text-sm font-medium text-trend-value">Sort by:</p>

                            <div className="border flex items-center p-2 gap-2.5 rounded-2xl">
                                <p className="text-xs font-normal text-trend-value">Weekly</p>

                                <div>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <SalesTrend />
                </div>




                <div className="resp grid gap-5 md:grid-cols-2 h-full">
                    {
                        monthlyOverview.map((month, idx) => (
                            <MonthlyOverview 
                                key={idx}
                                icon={month.icon}
                                trend={month.trend}
                                graph={month.graph}
                                info={month.info}
                                value={month.value}
                                rate={month.rate}
                                extraStyle={month.stock === 'profit' ? ['bg-grn-gradient', 'text-grn'] : ['bg-error-gradient','text-error']}
                            />
                        ))
                    }
                </div>

                <div className="resp base-style flex flex-col gap-5 hover:shadow-2xl transition duration-500 ease-in-out h-full">
                    <div className="flex justify-between text-lg">
                        <p className="heading">Last Orders</p>
                        <p className="font-medium text-grn">See All</p>
                    </div>

                    <div className=" tab flex flex-col gap-5 w-full ">
                        <div className="grid grid-cols-customer gap-6 text-table-head pb-2 border-b text-sm md:text-base min-w-482">
                            <p>Name</p>
                            <p className=" text-center">Date</p>
                            <p className="text-center">Amount</p>
                            <p className="text-center">Status</p>
                            <p className="text-center">Invoice</p>
                        </div>  

                        <div className=" tab flex flex-col min-w-482 gap-5 ">
                            {
                                allUser.map((user, idx) => (
                                    <Customer 
                                        key={idx}
                                        name={user.name}
                                        date={user.date}
                                        amount={user.amount}
                                        status={user.status}
                                        image={user.image}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className="resp base-style flex flex-col cursor-pointer gap-5 hover:shadow-2xl transition duration-500 ease-in-out h-full">
                    <div className="flex justify-between text-lg">
                        <p className="heading">Top Platform</p>
                        <p className="font-medium text-grn">See All</p>
                    </div>

                    <div className="flex flex-col gap-5 tab">
                        {
                            platform.map((p, idx) => (
                                <Platform 
                                    key={idx}
                                    color={p.color === 'purple' ? 'bg-purp' : p.color === 'blue' ? 'bg-blu' : p.color === 'orange' ? 'bg-orang' : p.color === 'red' ? 'bg-error' : ''}
                                    width={p.range === 0.6 ? 'w-0.6' : p.range === 0.4 ? 'w-0.4' : p.range === 0.2 ? 'w-0.2' : ''}
                                    name={p.name}
                                    price={p.price}
                                    percent={p.percent}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboard;