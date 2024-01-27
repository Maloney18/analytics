

const MonthlyOverview = ({icon, graph, info, value, rate, trend, extraStyle}) => {
  return (
    <div className=" flex flex-col gap-1 font-primary max-w-72 cursor-pointer justify-center p-2 bg-white rounded-2xl hover:shadow-2xl transition duration-500 ease-in-out">
        <div className="flex justify-between">
            <div className="p-1.5 w-max rounded-full border border-border-color">
                <img src={icon} alt="representation" />
            </div>

            <div className="self-end w-max">
                <img src={graph} alt="analysis" />
            </div>
        </div>

        <p className="text-total-order text-base lg:text-lg font-medium">{info}</p>
        <p className="font-semibold text-lg lg:text-2xl text-trend-value">{value}</p>
        
        <div className="flex gap-1.5 items-center">
            <div className={`flex gap-0.5 items-center border rounded-2xl p-1.5 ${extraStyle[0]}`}>
                <div>
                    <img src={trend} alt="trend" />
                </div>

                <p className={`${extraStyle[1]} font-medium text-xs`}>{rate}%</p>
            </div>

            <p className="text-sm text-previous-month font-secondary">vs. previous month</p>
        </div>
    </div>
  )
}

export default MonthlyOverview