import Title from '@/components/title/Title'
import React from 'react'
import Icons from '@/utils/icon'
const active = 'bg-white';
function ProperticeAreaEnd() {
  return (
    <div className='bg-primary-50 w-full flex justify-center md:h-[850px] lg:h-[650px]'>
      <div className='flex flex-col justify-center items-center h-full w-primary px-2 py-5'>
        <div className="flex flex-col text-center gap-5 justify-center mb-14 max-md:mt-14">
          <Title content="Propertice by Area" classNameH="text-4xl text-primary-800" />
          <div className="text-center flex justify-center">
            <p className="lg:w-[60%] sm:w-[80%] overflow-hidden text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className={`flex flex-col justify-between ${active} rounded p-5 h-[300px]`}>
            <Icons.HiOutlineHomeModern className='text-primary-500' size={70}/>
            <Title content='Sell your home' classNameH='text-[24px] text-gray-700'/>
            <p className='text-gray-400'>We do a free evaluation to be sure you want to start selling.</p>
            <a className='text-primary-500'  href='#'>Read more</a>
          </div>
          <div className='flex flex-col justify-between rounded p-5 h-[300px] bg-white'>
            <Icons.TbHomeHeart size={70} className='text-primary-500'/>
            <Title content='Rent your house' classNameH='text-[24px] text-gray-700'/>
            <p className='text-gray-400'>We do a free evaluation to be sure you want to start selling.</p>
            <a className='text-primary-500'  href='#'>Read more</a>
          </div>
          <div className='flex flex-col justify-between rounded p-5 h-[300px] bg-white'>
            <Icons.BiHomeHeart size={70} className='text-primary-500'/>
            <Title content='Buy a home' classNameH='text-[24px] text-gray-700'/>
            <p className='text-gray-400'>We do a free evaluation to be sure you want to start selling.</p>
            <a className='text-primary-500'  href='#'>Read more</a>
          </div>
          <div className='flex flex-col justify-between rounded p-5 h-[300px] bg-white'>
            <Icons.LiaTachometerAltSolid className='text-primary-500' size={70}/>
            <Title content='Free marketing' classNameH='text-[24px] text-gray-700'/>
            <p className='text-gray-400'>We do a free evaluation to be sure you want to start selling.</p>
            <a className='text-primary-500'  href='#'>Read more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProperticeAreaEnd