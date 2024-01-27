
const Platform = ({color, width, name, price, percent}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-semibold text-base lg:text-lg text-platform-black">{name}</p>

      <div className="bg-border-color p-1.5 lg:p-2 relative rounded-2xl">
        <div className={`absolute h-full top-0 p-1.5 lg:p-2 left-0 rounded-2xl ${color} ${width }`}></div>
      </div>

      <div className="flex justify-between text-base lg:text-lg font-normal text-trends">
        <p>${price}</p>
        <p>{percent}%</p>
      </div>
    </div>
  )
}

export default Platform