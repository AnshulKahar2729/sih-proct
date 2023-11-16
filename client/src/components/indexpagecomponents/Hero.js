import React from 'react';
import HeroImg from '../../assets/HeroImg.png'

function Hero() {
  return (
    <div className='w-full h-full flex bg-blue-800'>
        <div className='w-1/2 p-10 z-10 left-0 flex flex-col justify-center gap-7 text-white'>
            <h2 className='text-5xl font-bold text-white '>Fully Automated Exam Proctoring</h2>
            <p className='text-2xl'>It is highly advanced exam tool</p>
            <div className='flex gap-9'>
                <button className='bg-blue-700 text-white py-2 px-6 rounded-3xl'>Try Demo</button>
                <button className='border-white border py-2 px-6 rounded-3xl'>Start Exam</button>
            </div>
        </div>
        <div className='w-1/2 grid items-center p-4'>
            <img
                  className="" style={{}}
                  src={HeroImg}
                  alt="Hero Background"
            />
        </div>
    </div>
  )
}

export default Hero