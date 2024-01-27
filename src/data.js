// general overview
import icon1 from './assets/icons/box-tick.png'
import trendUp from './assets/icons/trending-up.png'
import trendDown from './assets/icons/trending-down.png'
import icon2 from './assets/icons/3d-rotate.png'
import icon3 from './assets/icons/shopping-cart.png'
import icon4 from './assets/icons/coin.png'
import graph1 from './assets/icons/Group 1.png'
import graph2 from './assets/icons/Group 2.png'
import graph3 from './assets/icons/Group 3.png'
import graph4 from './assets/icons/Group 4.png'


// all users imagees
import user1 from "./assets/user/user1.png";
import user2 from "./assets/user/user2.png";
import user3 from "./assets/user/user3.png";
import user4 from "./assets/user/user4.png";
import user5 from "./assets/user/user5.png";


export const allUser = [
    {
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '80,000',
        status: 'Paid',
        image: user1
    },

    {
        name: 'Jaydon Vaccaro',
        date: 'Nov 15, 2023',
        amount: '150,000',
        status: 'Refund',
        image: user2
    },
    {
        name: 'Corey Schleifer',
        date: 'Nov 14, 2023',
        amount: '87,000',
        status: 'Paid',
        image: user3
    },
    {
        name: 'Cooper Press',
        date: 'Nov 14, 2023',
        amount: '100,000',
        status: 'Refund',
        image: user4
    },
    {
        name: 'Phillip Lubin',
        date: 'Nov 13, 2023',
        amount: '78,000',
        status: 'Paid',
        image: user5
    }
]


export const monthlyOverview = [
    {
        info: 'Total Order',
        value: '350',
        trend: trendUp,
        rate: '23.5',
        icon: icon1,
        graph: graph1,
        stock: 'profit'
    },
    {
        info: 'Total Refund',
        value: '270',
        trend: trendDown,
        rate: '23.5',
        icon: icon2,
        graph: graph2,
        stock: 'loss'
    },
    {
        info: 'Average Sales',
        value: '1567',
        trend: trendDown,
        rate: '23.5',
        icon: icon3,
        graph: graph3,
        stock: 'loss'
    },
    {
        info: 'Total Income',
        value: '$350.000',
        trend: trendUp,
        rate: '23.5',
        icon: icon4,
        graph: graph4,
        stock: 'profit'
    },
]


export const platform = [
    {
        name: 'Book Bazaar',
        price: '2,500,000',
        percent: '+15',
        range: 0.6,
        color: 'purple'
    },

    {
        name: 'Artisan Aisle',
        price: '1,800,000',
        percent: '+10',
        range: 0.4,
        color: 'blue'
    },
    {
        name: 'Toy Troop',
        price: '1,200,000',
        percent: '+8',
        range: 0.2,
        color: 'orange'
    },
    {
        name: 'XStore',
        price: '1,200,000',
        percent: '+8',
        range: 0.2,
        color: 'red'
    },
]


export const barData = [
    {
        month: 'Jan',
        amount: 7000,
    },
    {
        month: 'Feb',
        amount: 19000,
    },
    {
        month: 'Mar',
        amount: 3500,
    },
    {
        month: 'Apr',
        amount: 28000,
    },
    {
        month: 'Mei',
        amount: 8000,
    },
    {
        month: 'Jun',
        amount: 45000,
    },
    {
        month: 'Jul',
        amount: 8000,
    },
    {
        month: 'Aug',
        amount: 25000,
    },
    {
        month: 'Sep',
        amount: 32000,
    },
    {
        month: 'Okt',
        amount: 5000,
    },
    {
        month: 'Nov',
        amount: 30000,
    },
    {
        month: 'Des',
        amount: 22000,
    }
]