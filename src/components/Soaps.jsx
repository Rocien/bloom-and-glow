import React, { useState } from 'react'
import { data } from '../data/data.js'

function Soaps() {
    // console.log(data);
const [soaps, setSoaps] = useState(data)

// Filter type of Soap
const filterType = (category) => {
    setSoaps(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

// Filter by price 
const filterPrice = (price) => {
    setSoaps(
        data.filter((item) => {
            return item.price === price;
        })
    )
};

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-secondary font-bold text-4xl text-center'>Our Stocks</h1>

        {/* Filter Row  */}
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setSoaps(data)} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white '>
                        All
                    </button>
                    <button onClick={() => filterType('Soap')} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white '>
                        Soap
                    </button>
                    <button onClick={() => filterType('Lotion')} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white '>
                        Lotion
                    </button>
                    
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('CAD$15.50')} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white'>
                        Low
                    </button>
                    <button onClick={() => filterPrice('CAD$20.76')} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white'>
                        Mid
                    </button>
                    <button onClick={() => filterPrice('CAD$26')} className='m-1 border-secondary text-secondary hover:bg-secondary hover:text-white'>
                        High
                    </button>
                </div>
            </div>
        </div>
        {/* Display Soap  */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {soaps.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 '>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-secondary text-white rounded-full p-1'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>

  )
}

export default Soaps