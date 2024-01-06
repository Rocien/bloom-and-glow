import React from 'react'

function HomeCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative h-full'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Body Soap</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>

            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://skyorganics.com/cdn/shop/products/2BSOAP16ListingAsset_HeroProduct_1200x.jpg?v=1689689318" 
            alt="Soap" 
            />
        </div>

        <div className='rounded-xl relative h-full'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Face Soap</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>

            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://harpersnaturals.com/cdn/shop/files/AfricanBlackSoap_3.jpg?v=1684338429" 
            alt="Soap" 
            />

        </div>

        <div className='rounded-xl relative h-full'>
            {/* Overlay  */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Hand Soap</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>

            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.zeald.com/ic/gonative/2266475568/deluxe%20black%20soap%202.1.jpg" 
            alt="Soap" 
            />

        </div>

    </div>
  )
}

export default HomeCards