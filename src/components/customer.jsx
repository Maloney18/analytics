import icon from '../assets/icons/document-download.png'

const Customer = ({name, image, status, amount, date}) => {
    return (
        <div className="grid grid-cols-customer gap-5 border-b pb-2 text-sm md:text-base">

            <div className='flex items-center gap-5'>
                <div>
                    <img src={image} alt="customer's image" />
                </div>

                <p className='text-trend-value font-medium '>{name}</p>
            </div>

            <p className='text-date flex items-center justify-center'>{date}</p>

            <p className='text-amount flex items-center justify-center'>${amount}</p>

            <p className={`${status === 'Paid' ? 'text-grn' : 'text-error'} flex items-center justify-center`}>{status}</p>

            <div className='flex items-center gap-0.5 md:gap-1.5 justify-center cursor-pointer'>
                <div>
                    <img src={icon} alt="download" />
                </div>
                <p className='text-xs md:text-sm text-amount'>View</p>
            </div>
        </div>
    )
}

export default Customer