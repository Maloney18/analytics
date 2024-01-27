import vector from '../assets/icons/Vector.png'
import box from '../assets/icons/component 13.png'
import caution from '../assets/icons/component 12.png'
import ex from '../assets/icons/component 11.png'
import trend from '../assets/icons/component 10.png'
import people from '../assets/icons/component 9.png'
import dash from '../assets/icons/component 8.png'
import lightMode from '../assets/icons/lightMode.png'
import darkMode from '../assets/icons/moon 1.png'
import settings from '../assets/icons/icon.png'
import others from '../assets/icons/frame 12.png'
import logout from '../assets/icons/logout.png'
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className='hidden bg-sidebar-grey py-5 h-screen md:flex flex-col justify-between'>
        <div className='flex flex-col gap-y-4 items-center'>
            <div className='logo-cont'>
                <img className='image' src={vector} alt="logo" />
            </div>

            <div className='active'>
                <img className='image' src={dash} alt="dashboard" />
            </div>

            <div className='hov'>
                <img className='image' src={trend} alt="trend" />
            </div>

            <div className='hov'>
                <img className='image' src={people} alt="people" />
            </div>

            <div className='hov'>
                <img className='image' src={box} alt="box" />
            </div>

            <div className='hov'>
                <img className='image' src={ex} alt="ex" />
            </div>

            <div className='hov'>
                <img className='image' src={caution} alt="caution" />
            </div>

            <div className='rounded-3xl bg-white flex flex-col gap-y-4 p-2'>
                <div>
                    <img className='image' src={lightMode} alt="light mode" />
                </div>

                <div className='hov rounded-full'>
                    <img className='image' src={darkMode} alt="dark mode" />
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-y-4 items-center'>
            <div className='hov w-full flex justify-center'>
                <img className='image' src={others} alt="others" />
            </div>

            <div className='hov'>
                <img className='image' src={settings} alt="settings" />
            </div>

            <div className='hov'>
                <img className='image' src={logout} alt="logout" />
            </div>
        </div>
    </aside>
  )
}

export default Sidebar;