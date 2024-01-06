import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay image */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex bg-black/50 flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-bold'>The <span className='text-primary'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-bold'>Black <span className='text-primary'>Soap</span></h1>
            </div>
            <img className='object-cover max-h-[500px] w-full ' src="https://www.shutterstock.com/image-photo/african-black-soap-bubbles-hand-600nw-1742162879.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero