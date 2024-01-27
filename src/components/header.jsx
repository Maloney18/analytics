import Arrow from '../assets/icons/Arrow---Down-2.png'
import searchIcon from '../assets/icons/Search.png'
import calendar from '../assets/icons/solar_calendar-linear.png'
import bell from '../assets/icons/solar_bell-outline.png'
import user from '../assets/user/profile.png'


const Header = () => {
  return (
    <header className='w-lvw md:w-full flex justify-between items-center p-2.5 md:px-5 bg-header-bg  md:border-l border-b border-border-color'>
        <p className='font-primary font-bold text-lg md:text-xl'>Dashboard</p>

        <div className='flex gap-5 md:gap-7 items-center'>
            <div className='max-w-349 p-2.5 md:py-3 md:px-3.5 rounded-full md:rounded-3xl flex gap-2 items-center border  bg-white border-border-color'>
                <div>
                    <img src={searchIcon} alt="search" />
                </div>

                <input className='hidden md:block font-secondary text-base outline-none' type="text" placeholder="Search..."/>
            </div>

            <div className='hidden md:flex gap-2 items-center'>
                <div>
                    <img src={calendar} alt="calendar" />
                </div>

                <p className='hidden lg:block font-secondary text-sm font-medium'>November 15, 2023</p>
            </div>

            <div className='rounded-full border border-border-color p-2'>
                <img src={bell} alt="bell" />
            </div>

            <div className='hidden lg:flex py-0.5 px-1.5 rounded-3xl gap-2 items-center border border-border-color'>
                <div>
                    <img src={user} alt="user" />
                </div>

                <div>
                    <p className='font-secondary font-normal text-base'>Justin Bergson</p>
                    <p className='font-secondary font-normal text-sm text-gmail'>Justin@gmail.com</p>
                </div>

                <div>
                    <img src={Arrow} alt="arrow-down" />
                </div>
            </div>
        </div>



    </header>
  )
}

export default Header